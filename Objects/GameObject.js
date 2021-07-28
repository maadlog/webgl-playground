class GameObject {
  constructor(ctx,material) {
    if(!!material)
    {
      this.material = material;
    } 
    else 
    {
      this.material = new GameMaterial(ctx);
    }  

    this.base_transformMatrix = mat4.create();
    this.transformMatrix = mat4.create();
      
    this.position = null;
    this.colors = null;
    this.indices = null;
    this.indices_count = 0;
  }

  render(ctx,viewMatrix,projectionMatrix) {
    alert("GameObject.render() must be overriden");
  };

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