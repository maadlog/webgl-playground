class Cube extends GameObject {
  constructor(ctx,vec3_position,side, material) {
    super(ctx, material);
    this.vec3_position = vec3_position;
    this.side = side;
  }

  initBuffers(ctx) {
    const positionBuffer = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, positionBuffer);

      const x0 = this.vec3_position[0];
      const y0 = this.vec3_position[1];
      const z0 = this.vec3_position[2];
      const side = this.side;

      const positions = [
      x0      ,y0     ,z0     ,
      x0+side ,y0     ,z0     ,
      x0      ,y0+side,z0     ,
      x0+side ,y0+side,z0     , //Front

      x0      ,y0     ,z0+side,
      x0+side ,y0     ,z0+side,
      x0      ,y0+side,z0+side,
      x0+side ,y0+side,z0+side, //Back

      x0      ,y0     ,z0     ,
      x0+side ,y0     ,z0     ,
      x0      ,y0     ,z0+side,
      x0+side ,y0     ,z0+side, //Top

      x0      ,y0+side ,z0     ,
      x0+side ,y0+side ,z0     ,
      x0      ,y0+side ,z0+side,
      x0+side ,y0+side ,z0+side, //Bottom

      x0+side ,y0     ,z0     ,
      x0+side ,y0+side,z0     ,
      x0+side ,y0     ,z0+side,
      x0+side ,y0+side,z0+side, //Right

      x0      ,y0     ,z0     ,
      x0      ,y0+side,z0     ,
      x0      ,y0     ,z0+side,
      x0      ,y0+side,z0+side, //Left
    ];

    ctx.bufferData(ctx.ARRAY_BUFFER,
                  new Float32Array(positions),
                  ctx.STATIC_DRAW);

    this.position = positionBuffer;

  const faceColors = [
      [1.0,  1.0,  1.0,  1.0],    // Front face: white
      [1.0,  0.0,  0.0,  1.0],    // Back face: red
      [0.0,  1.0,  0.0,  1.0],    // Top face: green
      [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
      [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
      [1.0,  0.0,  1.0,  1.0],    // Left face: purple
    ];

    // Convert the array of colors into a table for all the vertices.

    var colorsArray = [];

    for (var j = 0; j < faceColors.length; ++j) {
      const c = faceColors[j];

      // Repeat each color four times for the four vertices of the face
      colorsArray = colorsArray.concat(c, c, c, c);
    }

    const colorBuffer = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, colorBuffer);

    ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array(colorsArray), ctx.STATIC_DRAW);

    this.colors = colorBuffer;

    const indexBuffer = ctx.createBuffer();
    ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // This array defines each face as two triangles, using the
    // indices into the vertex array to specify each triangle's
    // position.

    const indicesArray = [
      0,  1,  2,      1,  2,  3,    // front
      4,  5,  6,      5,  6,  7,    // back
      8,  9,  10,     9,  10, 11,   // top
      12, 13, 14,     13, 14, 15,   // bottom
      16, 17, 18,     17, 18, 19,   // right
      20, 21, 22,     21, 22, 23,   // left
    ];

    // Now send the element array to GL

    ctx.bufferData(ctx.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indicesArray), ctx.STATIC_DRAW);
    this.indices_count = indicesArray.length;
    this.indices = indexBuffer;
  }

  update(time) { }
}
