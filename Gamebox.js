
class GameBox {
  constructor(canvas_id) {
    this.lastFrameTime = Date.now();
    this.currentFrameTime = Date.now();
    this.timeElapsed = 0;

    this.gameObjects = [];

    var htmlCanvas = document.getElementById(canvas_id);
    htmlCanvas.width = htmlCanvas.clientWidth;
    htmlCanvas.height = htmlCanvas.clientHeight;
    this.canvas = htmlCanvas;

    this.ctx = htmlCanvas.getContext("webgl");
    if (!this.ctx) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }
    this.ctx.getExtension('OES_standard_derivatives');

    this.camera = new GameCamera(this.ctx,htmlCanvas);
  }

  gameLoop() {
    window.requestAnimationFrame(this.gameLoop.bind(this));
    this.lastFrameTime = this.currentFrameTime;
    this.currentFrameTime = Date.now();
    this.timeElapsed =  this.currentFrameTime - this.lastFrameTime ;

    this.update(this.timeElapsed); //modify data which is used to render
    this.render();
  }

  register(aGameObject) {
    this.gameObjects.push(aGameObject);
  }

  update(timeElapsed) {
    this.camera.update(timeElapsed);
    
    this.gameObjects.forEach( function (value,index,array) {
            value.update(timeElapsed);
        });
  }

  render () {
    this.ctx.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
    this.ctx.clearDepth(1.0);                 // Clear everything
    this.ctx.enable(this.ctx.DEPTH_TEST);           // Enable depth testing
    this.ctx.depthFunc(this.ctx.LEQUAL);            // Near things obscure far things
  
    // Clear the canvas before we start drawing on it.
  
    this.ctx.clear(this.ctx.COLOR_BUFFER_BIT | this.ctx.DEPTH_BUFFER_BIT);
  
    const projectionMatrix = this.camera.projectionMatrix();
    const viewMatrix = this.camera.viewMatrix();
  
    for (var i = this.gameObjects.length - 1; i >= 0; i--) {
      this.gameObjects[i].render(this.ctx,viewMatrix,projectionMatrix);
    }
  }
}