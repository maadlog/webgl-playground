class Plane extends GameObject {
  constructor(ctx,vec3_position,side) {
    super(ctx);
    this.vec3_position = vec3_position;
    this.side = side;
  }

  initBuffers(ctx) {
    const positionBuffer = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, positionBuffer);

    var x0 = this.vec3_position[0];
    var y0 = this.vec3_position[1];
    var z0 = this.vec3_position[2];
    var side = this.side;

    const positions = [
      x0      ,y0     ,z0     ,
      x0+side ,y0     ,z0     ,
      x0      ,y0     ,z0+side,
      x0+side ,y0     ,z0+side,
    ];

    ctx.bufferData(ctx.ARRAY_BUFFER,
                  new Float32Array(positions),
                  ctx.STATIC_DRAW);

    this.position = positionBuffer;

  const faceColors = [
      [0.0,  0.3921,  0.0,  1.0]
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
      0,  1,  2,      1,  2,  3,
    ];

    // Now send the element array to GL

    ctx.bufferData(ctx.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indicesArray), ctx.STATIC_DRAW);
    this.indices_count = indicesArray.length;
    this.indices = indexBuffer;
  };

  update(time) { };
}
