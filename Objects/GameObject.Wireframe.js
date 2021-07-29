class Wireframe extends GameObject {

  initBuffers(ctx,vertices,indices) {
    const positionBuffer = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, positionBuffer);

    const positions = vertices;

    ctx.bufferData(ctx.ARRAY_BUFFER,
                  new Float32Array(positions),
                  ctx.STATIC_DRAW);

    this.position = positionBuffer;

    // Convert the array of colors into a table for all the vertices.

    var colorsArray = [];

    for (var j = 0; j < vertices.length; ++j) {
      colorsArray = colorsArray.concat([0.0,0.0,0.0,1.0]);
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

    var indicesArray = [];


    for (var i = 0; i < indices.length; (i = i+3)) {
      var line1 = [indices[i]  , indices[i+1]];
      var line2 = [indices[i+1], indices[i+2]];
      var line3 = [indices[i+2], indices[i]  ];

      indicesArray = indicesArray.concat(line1);
      indicesArray = indicesArray.concat(line2);
      indicesArray = indicesArray.concat(line3);
    }

    ctx.bufferData(ctx.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indicesArray), ctx.STATIC_DRAW);
    this.indices_count = indicesArray.length;
    this.indices = indexBuffer;
  };

  render(ctx,viewMatrix,projectionMatrix) {
      super.render(ctx, viewMatrix, projectionMatrix)
      ctx.drawElements(ctx.LINES, this.indices_count, ctx.UNSIGNED_SHORT, 0);
  };

  updateMatrix(transform) {
    this.transformMatrix = transform;
  };

}
