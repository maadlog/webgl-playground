TexturedAnimatedCube = function(ctx,vec3_position,side,texture_url) {
  this.vec3_position = vec3_position;
  this.side = side;

  this.rotation = 0.0;

  GameObject.call(this,ctx,new TextureMaterial(ctx,texture_url));

}
TexturedAnimatedCube.prototype = Object.create(GameObject.prototype);
TexturedAnimatedCube.prototype.constructor = TexturedAnimatedCube;

TexturedAnimatedCube.prototype.initBuffers = function(ctx) {
  const positionBuffer = ctx.createBuffer();

  ctx.bindBuffer(ctx.ARRAY_BUFFER, positionBuffer);

  var x0 = this.vec3_position[0];
  var y0 = this.vec3_position[1];
  var z0 = this.vec3_position[2];
  var side = this.side;
  
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



const textureCoordBuffer = ctx.createBuffer();
  ctx.bindBuffer(ctx.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0,  0.0,
    1.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
    // Back
    0.0,  0.0,
    1.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
    // Top
    0.0,  0.0,
    1.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
    // Bottom
    0.0,  0.0,
    1.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
    // Right
    0.0,  0.0,
    1.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
    // Left
    0.0,  0.0,
    1.0,  0.0,
    0.0,  1.0,
    1.0,  1.0,
  ];

  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                ctx.STATIC_DRAW);


this.textureCoord = textureCoordBuffer;

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
};

TexturedAnimatedCube.prototype.render = function(ctx,viewMatrix,projectionMatrix) {
  
    this.material.renderBind(ctx,this.transformMatrix,viewMatrix,projectionMatrix);


      const numComponents = 3;  // pull out 2 values per iteration
      const type = ctx.FLOAT;    // the data in the buffer is 32bit floats
      const normalize = false;  // don't normalize
      const stride = 0;         // how many bytes to get from one set of values to the next
                          // 0 = use type and numComponents above
      const offset = 0;         // how many bytes inside the buffer to start from

    ctx.bindBuffer(ctx.ARRAY_BUFFER, this.position);
      ctx.vertexAttribPointer(
          this.material.programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);

      ctx.enableVertexAttribArray(
          this.material.programInfo.attribLocations.vertexPosition);
     

      const numTexture = 2; // every coordinate composed of 2 values

      ctx.bindBuffer(ctx.ARRAY_BUFFER, this.textureCoord);
      ctx.vertexAttribPointer(this.material.programInfo.attribLocations.textureCoord, numTexture, type, normalize, stride, offset);
      ctx.enableVertexAttribArray(this.material.programInfo.attribLocations.textureCoord);

      // Tell WebGL we want to affect texture unit 0
      ctx.activeTexture(ctx.TEXTURE0);

      // Bind the texture to texture unit 0
      ctx.bindTexture(ctx.TEXTURE_2D, this.material.texture);

      // Tell the shader we bound the texture to texture unit 0
      ctx.uniform1i(this.material.programInfo.uniformLocations.uSampler, 0);
       
    
    ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, this.indices);

        const vertexCount = this.indices_count;
        const type2 = ctx.UNSIGNED_SHORT;
        ctx.drawElements(ctx.TRIANGLES, vertexCount, type2, offset);
  
};
TexturedAnimatedCube.prototype.update = function(time) {
  
  this.rotation += time * 0.001;
  
  var pace = (this.side / 2);

  var x0 = this.vec3_position[0];
  var y0 = this.vec3_position[1];
  var z0 = this.vec3_position[2];

  mat4.translate(this.transformMatrix,
    this.base_transformMatrix,
    [x0+pace, y0+pace, z0+pace]);

  mat4.rotate(this.transformMatrix,
    this.transformMatrix,
    this.rotation,
    vec3.fromValues(1.0,0.0,0.0));

  mat4.rotate(this.transformMatrix,
    this.transformMatrix,
    this.rotation * 0.7,
    vec3.fromValues(0.0,1.0,0.0));

  mat4.translate(this.transformMatrix,
    this.transformMatrix,
    [-x0-pace, -y0-pace, -z0-pace]);

};

