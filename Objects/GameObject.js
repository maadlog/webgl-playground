class GameObject {
  constructor(ctx,material) {
    this.material = material || new GameMaterial(ctx);
    this.material.loadProgramInfo(ctx);

    this.base_transformMatrix = mat4.create();
    this.transformMatrix = mat4.create();

    this.position = null;
    this.colors = null;
    this.indices = null;
    this.indices_count = 0;
  }

  initBuffers(ctx) {
    alert("GameObject.initBuffers() must be overriden");
  }

  render(ctx,viewMatrix,projectionMatrix) {

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

    const numComponentsColor = 4;  // pull out 2 values per iteration

    ctx.bindBuffer(ctx.ARRAY_BUFFER, this.colors);
    ctx.vertexAttribPointer(
        this.material.programInfo.attribLocations.vertexColor,
        numComponentsColor,
        type,
        normalize,
        stride,
        offset);

    ctx.enableVertexAttribArray(
        this.material.programInfo.attribLocations.vertexColor);


    ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, this.indices);

    const vertexCount = this.indices_count;
    const type2 = ctx.UNSIGNED_SHORT;
    ctx.drawElements(ctx.TRIANGLES, vertexCount, type2, offset);

  }

  update(time) {
    alert("GameObject.update() must be overriden");
  };
}

/*
 * For new game objects:
 * MyNewFancyObject = function(ctx) {
 * 	GameObject.call(this,ctx);
 *
 * 	// Logic Here //
 *
 * }
 * MyNewFancyObject.prototype = Object.create(GameObject.prototype);
 * MyNewFancyObject.prototype.constructor = MyNewFancyObject;
 */
