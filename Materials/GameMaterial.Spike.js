class SpikeMaterial extends GameMaterial {
	constructor(ctx) {
		var vsSource = `
	precision highp float;

	attribute vec4 aVertexPosition;
	attribute vec4 aVertexColor;
	attribute vec2 aVertexCoords;
	attribute vec3 aBaricentricCoord;

	uniform mat4 uModelMatrix;
	uniform mat4 uViewMatrix;
	uniform mat4 uProjectionMatrix;
	uniform float time;

	varying lowp vec4 vColor;
	varying highp vec3 vBaricentric;

	void main() {
		
	  vec4 norm = normalize(aVertexPosition);
	  vec3 variante;
	  float var = max(2.0* (sin(time)+ 2.0),0.0);
	  if (fract(aVertexCoords.x * 0.5) < 0.00001 && fract(aVertexCoords.y * 0.5) < 0.00001)
	  { 
	  	variante = norm.xyz * var; 
	  	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * (aVertexPosition + vec4(variante,1.0));
	  } 
	  else 
	  {
	  	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;
	  }

	  vBaricentric = aBaricentricCoord;
	  vColor = aVertexColor;
	}
	`;
		var fsSource = `
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	varying lowp vec4 vColor;
	varying highp vec3 vBaricentric;

	float edgeFactor() {
		highp vec3 d = fwidth(vBaricentric);
		highp vec3 a3 = smoothstep(vec3(0.0),d*0.5,vBaricentric);
	    return min(min(a3.x, a3.y), a3.z);
	}

	void main() {
		//gl_FragColor = vColor;
		gl_FragColor.a = 1.0;
		gl_FragColor.rgb =  mix(vec3(0.0), vColor.rgb, edgeFactor());
	}
	`;

		super(ctx,vsSource,fsSource);
		this.elapsed = 0;
		this.time = 0;
	}


	getAttribLocations(ctx,shaderProgram) {
		return {
			vertexPosition: ctx.getAttribLocation(shaderProgram, 'aVertexPosition'),
			vertexColor: ctx.getAttribLocation(shaderProgram, 'aVertexColor'),
			vertexCoords: ctx.getAttribLocation(shaderProgram, 'aVertexCoords'),
			baricentricCoords: ctx.getAttribLocation(shaderProgram, 'aBaricentricCoord'),
		};
	}

	getUniformLocations(ctx,shaderProgram) {
		return {
			modelMatrix: ctx.getUniformLocation(shaderProgram, 'uModelMatrix'),
			viewMatrix: ctx.getUniformLocation(shaderProgram, 'uViewMatrix'),
			projectionMatrix: ctx.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
			time: ctx.getUniformLocation(shaderProgram, 'time'),
		};
	}

	renderBind(ctx,transformMatrix,viewMatrix,projectionMatrix) {
		ctx.useProgram(this.programInfo.program);

		// Set the shader uniforms
		ctx.uniformMatrix4fv(
			this.programInfo.uniformLocations.modelMatrix,
			false,
			transformMatrix);
		ctx.uniformMatrix4fv(
			this.programInfo.uniformLocations.viewMatrix,
			false,
			viewMatrix);
		ctx.uniformMatrix4fv(
			this.programInfo.uniformLocations.projectionMatrix,
			false,
			projectionMatrix);

		ctx.uniform1f(
			this.programInfo.uniformLocations.time,
			this.time);

	};

	update(elapsed) {
		this.elapsed += elapsed;
		if(this.elapsed > 5000)
		{
			this.elapsed = 0;
		}

		this.time = this.elapsed * Math.PI * 2 / 5000;
	};
}
