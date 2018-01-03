function Init(){
  var game = new GameBox('canvas');


	var cube11 = new Cube(game.ctx,vec3.fromValues(0,0,0),1);
	var cube12 = new Cube(game.ctx,vec3.fromValues(3,0,0),2);
	var cube13 = new AnimatedCube(game.ctx,vec3.fromValues(7,0,0),4);
	var cube14 = new TexturedAnimatedCube(game.ctx,vec3.fromValues(15,0,0),8,"https://avatars0.githubusercontent.com/u/7192842?s=400&u=28f213977782f68003bf7fda363037b4e9d414eb&v=4");

  game.register(cube11);
  game.register(cube12);
  game.register(cube13);
  game.register(cube14);



  var sphere = new Sphere(game.ctx,vec3.fromValues(3,6,0),2.0);
  var spikedSphere = new SpikedSphere(game.ctx,vec3.fromValues(-4,6,0),2.0,0);
  game.register(sphere);
  game.register(spikedSphere);



  var field = new Plane(game.ctx,vec3.fromValues(-50,-10,-50),100);
  game.register(field);

  var tree = new Tree(game.ctx,vec3.fromValues(1,1,8),4);
  var ntree = new NormalsTree(game.ctx,vec3.fromValues(1,1,18),4);
  game.register(tree);
  game.register(ntree);


  game.gameLoop();
}