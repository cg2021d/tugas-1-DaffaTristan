function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const botol1 = {
        color : [0.11, 0.25, 0.75],
        coloralt : [0.17, 0.22, 0.33],

        A : [-0.31, -0.5],
        B : [-0.29, 0.27],
        C : [-0.39, 0.21],
        D : [-0.5, 0.19],
        E : [-0.62, 0.21],
        F : [-0.71, 0.27],
        G : [-0.71, 0.25],
        H : [-0.64, 0.0],
        I : [-0.69, -0.5],
        J : [-0.6, -0.55],
        K : [-0.5, -0.57],
        L : [-0.4, -0.55],
    }

    const tutup1 = {
        color : [0.33, 0.35, 0.48],

        A : [-0.29, 0.27],
        B : [-0.29, 0.5],
        C : [-0.31, 0.58],
        D : [-0.35, 0.65],
        E : [-0.41, 0.69],
        F : [-0.5, 0.71],
        G : [-0.58, 0.69],
        H : [-0.65, 0.65],
        I : [-0.69, 0.58],
        J : [-0.71, 0.5],

        K : [-0.71, 0.27],
        L : [-0.62, 0.21],
        M : [-0.5, 0.19],
        N : [-0.39, 0.21],
    }

    const botol2 = {
        color : [0.11, 0.25, 0.75],
        coloralt : [0.17, 0.22, 0.33],

        A : [0.31, -0.5],
        B : [0.29, 0.27],
        C : [0.39, 0.21],
        D : [0.5, 0.19],
        E : [0.62, 0.21],
        F : [0.71, 0.27],
        G : [0.71, 0.25],
        H : [0.64, 0.0],
        I : [0.69, -0.5],
        J : [0.6, -0.55],
        K : [0.5, -0.57],
        L : [0.4, -0.55],
    }

    const tutup2 = {
        color : [0.33, 0.35, 0.48],

        A : [0.29, 0.27],
        B : [0.29, 0.5],
        C : [0.31, 0.58],
        D : [0.35, 0.65],
        E : [0.41, 0.69],
        F : [0.5, 0.71],
        G : [0.58, 0.69],
        H : [0.65, 0.65],
        I : [0.69, 0.58],
        J : [0.71, 0.5],
        K : [0.71, 0.27],
        L : [0.62, 0.21],
        M : [0.5, 0.19],
        N : [0.39, 0.21],
    }

    // kumpulan vertex pada gambar kiri dan kanan
    const vertices = [
        // objek batang pada gambar kiri
        ...botol1.A, ...botol1.color,
        ...botol1.B, ...botol1.color,
        ...botol1.C, ...botol1.color,

        ...botol1.A, ...botol1.color,
        ...botol1.C, ...botol1.color,
        ...botol1.D, ...botol1.color, 
        
        ...botol1.A, ...botol1.color,
        ...botol1.D, ...botol1.color,
        ...botol1.E, ...botol1.color,

        ...botol1.A, ...botol1.color,
        ...botol1.E, ...botol1.color,
        ...botol1.F, ...botol1.color, 
        
        ...botol1.A, ...botol1.color,
        ...botol1.F, ...botol1.color,
        ...botol1.G, ...botol1.color,

        ...botol1.A, ...botol1.color,
        ...botol1.G, ...botol1.color,
        ...botol1.H, ...botol1.color, 
        
        ...botol1.A, ...botol1.color,
        ...botol1.H, ...botol1.color,
        ...botol1.I, ...botol1.color,

        ...botol1.A, ...botol1.color,
        ...botol1.I, ...botol1.color,
        ...botol1.J, ...botol1.color, 

        ...botol1.A, ...botol1.color,
        ...botol1.J, ...botol1.color,
        ...botol1.K, ...botol1.color,

        ...botol1.A, ...botol1.color,
        ...botol1.K, ...botol1.color,
        ...botol1.L, ...botol1.color, 

        ...botol1.H, ...botol1.coloralt,
        ...botol1.I, ...botol1.coloralt,
        ...botol1.J, ...botol1.coloralt,

        ...botol1.H, ...botol1.coloralt,
        ...botol1.J, ...botol1.coloralt,
        ...botol1.K, ...botol1.coloralt,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.B, ...tutup1.color,
        ...tutup1.C, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.C, ...tutup1.color,
        ...tutup1.D, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.D, ...tutup1.color,
        ...tutup1.E, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.E, ...tutup1.color,
        ...tutup1.F, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.F, ...tutup1.color,
        ...tutup1.G, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.G, ...tutup1.color,
        ...tutup1.H, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.H, ...tutup1.color,
        ...tutup1.I, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.I, ...tutup1.color,
        ...tutup1.J, ...tutup1.color,
        
        ...tutup1.A, ...tutup1.color,
        ...tutup1.J, ...tutup1.color,
        ...tutup1.K, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.K, ...tutup1.color, 
        ...tutup1.L, ...tutup1.color,

        ...tutup1.A, ...tutup1.color,
        ...tutup1.L, ...tutup1.color,
        ...tutup1.M, ...tutup1.color,
        
        ...tutup1.A, ...tutup1.color,
        ...tutup1.M, ...tutup1.color,
        ...tutup1.N, ...tutup1.color,

        ...botol2.A, ...botol2.color,
        ...botol2.B, ...botol2.color,
        ...botol2.C, ...botol2.color,

        ...botol2.A, ...botol2.color,
        ...botol2.C, ...botol2.color,
        ...botol2.D, ...botol2.color, 
        
        ...botol2.A, ...botol2.color,
        ...botol2.D, ...botol2.color,
        ...botol2.E, ...botol2.color,

        ...botol2.A, ...botol2.color,
        ...botol2.E, ...botol2.color,
        ...botol2.F, ...botol2.color, 
        
        ...botol2.A, ...botol2.color,
        ...botol2.F, ...botol2.color,
        ...botol2.G, ...botol2.color,

        ...botol2.A, ...botol2.color,
        ...botol2.G, ...botol2.color,
        ...botol2.H, ...botol2.color, 
        
        ...botol2.A, ...botol2.color,
        ...botol2.H, ...botol2.color,
        ...botol2.I, ...botol2.color,

        ...botol2.A, ...botol2.color,
        ...botol2.I, ...botol2.color,
        ...botol2.J, ...botol2.color, 

        ...botol2.A, ...botol2.color,
        ...botol2.J, ...botol2.color,
        ...botol2.K, ...botol2.color,

        ...botol2.A, ...botol2.color,
        ...botol2.K, ...botol2.color,
        ...botol2.L, ...botol2.color, 

        ...tutup2.A, ...tutup2.color,
        ...tutup2.B, ...tutup2.color,
        ...tutup2.C, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.C, ...tutup2.color,
        ...tutup2.D, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.D, ...tutup2.color,
        ...tutup2.E, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.E, ...tutup2.color,
        ...tutup2.F, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.F, ...tutup2.color,
        ...tutup2.G, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.G, ...tutup2.color,
        ...tutup2.H, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.H, ...tutup2.color,
        ...tutup2.I, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.I, ...tutup2.color,
        ...tutup2.J, ...tutup2.color,
        
        ...tutup2.A, ...tutup2.color,
        ...tutup2.J, ...tutup2.color,
        ...tutup2.K, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.K, ...tutup2.color,
        ...tutup2.L, ...tutup2.color,

        ...tutup2.A, ...tutup2.color,
        ...tutup2.L, ...tutup2.color,
        ...tutup2.M, ...tutup2.color,
        
        ...tutup2.A, ...tutup2.color,
        ...tutup2.M, ...tutup2.color,
        ...tutup2.N, ...tutup2.color,

        ...botol2.H, ...botol2.coloralt,
        ...botol2.I, ...botol2.coloralt,
        ...botol2.J, ...botol2.coloralt,

        ...botol2.H, ...botol2.coloralt,
        ...botol2.J, ...botol2.coloralt, //48
        ...botol2.K, ...botol2.coloralt,
    ]
    
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    // Kecepatan NRP (006)
    var speed = 0.0006;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[491] < -1.0 || vertices[576] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 361; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.01, 0.9, 0.7, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 150);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
