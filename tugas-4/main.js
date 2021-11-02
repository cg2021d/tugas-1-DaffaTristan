import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';


function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 60;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 10;

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();    

    const scene = new THREE.Scene();
    renderer.shadowMap.enabled = true;
  
    var texture, material, plane;

    texture = THREE.ImageUtils.loadTexture( "/tugas-4/texture/patio.jpg" );

    texture.wrapS = THREE.RepeatWrapping; 
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set( 4, 4 ); 

    material = new THREE.MeshLambertMaterial({ map : texture });
    plane = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), material);
    plane.material.side = THREE.DoubleSide;
    plane.position.y = -3;
    plane.receiveShadow = true
    plane.rotation.x = Math.PI / 2;

    scene.add(plane);

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    scene.fog = new THREE.Fog(0xD8D8D8, 3, 40);

    const spotLight = new THREE.SpotLight( 0xffffff, 1.5 );
    spotLight.position.set(5,30,3);;

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;

    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 100;
    spotLight.shadow.camera.fov = 30;

    scene.add( spotLight );
    var cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(256, {
        format: THREE.RGBFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
        encoding: THREE.sRGBEncoding,
    });

    var cubeCamera1 = new THREE.CubeCamera(1, 1000, cubeRenderTarget1);

    var cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(256, {
        format: THREE.RGBFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
        encoding: THREE.sRGBEncoding,
    });

    var cubeCamera2 = new THREE.CubeCamera(1, 1000, cubeRenderTarget2);

    const refGeometry = new THREE.SphereGeometry(2, 32, 32);
    const refMaterial = new THREE.MeshBasicMaterial({
        envMap: cubeRenderTarget2.texture,
        combine: THREE.MultiplyOperation,
        reflectivity: 1,
    });
    const reflective = new THREE.Mesh(refGeometry, refMaterial);

    reflective.castShadow = true;
    reflective.receiveShadow = true;

    reflective.position.set(0,0,0);
    scene.add(reflective);
    
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    
    function makeInstance(geometry, color) {
        const material = new THREE.MeshPhongMaterial({color});
        const cube = new THREE.Mesh(geometry, material);
        cube.castShadow = true;
        scene.add(cube);

        cube.position.x = Math.random() * 10 - 8;
        cube.position.y = Math.random() * 5;
        cube.position.z = Math.random() * 10 - 8;
        return cube;
    };

    const cubes = [
        makeInstance(geometry, 0x3B2932),
        makeInstance(geometry, 0x6BDF65),
        makeInstance(geometry, 0x3797A4),
        makeInstance(geometry, 0xFF7722),
        makeInstance(geometry, 0xEDF492),
    ];

    {
        const loader = new THREE.TextureLoader();
        const texture = loader.load('/tugas-4/background/snow.jpg',
        () => {
            const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
            rt.fromEquirectangularTexture(renderer, texture);
            scene.background = rt.texture;
        });
    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    var count = 0;

    function render(time) {
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        reflective.visible = false
        if (count % 2 === 0) {
            cubeCamera1.update(renderer, scene);
        } else {
            cubeCamera2.update(renderer, scene);
        }

        count++;
        reflective.visible = true
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

  requestAnimationFrame(render);
}

main();
