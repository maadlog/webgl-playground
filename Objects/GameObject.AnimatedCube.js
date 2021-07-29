class AnimatedCube extends Cube {
  constructor(ctx,vec3_position,side, material) {
    super(ctx, vec3_position, side, material);
    this.rotation = 0.0;
  }

  update(time) {

  this.rotation += time * 0.001;

    const pace = (this.side / 2);

    const x0 = this.vec3_position[0];
    const y0 = this.vec3_position[1];
    const z0 = this.vec3_position[2];

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
}
