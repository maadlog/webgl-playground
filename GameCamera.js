class GameCamera {
    constructor(ctx,htmlCanvas) {
        this.ctx = ctx;

        this.up = vec3.fromValues(0,1.0,0);
        this.eye = vec3.fromValues(0.0,0.0,-10.0);
        this.direction = vec3.fromValues(0.0,0.0,1.0);
        this.speed = 0.2;
        this.rotSpeed = 0.02;

        this.keysPressed = {};

        this.rotationMatrix = mat4.create();

        this.yaw = 0;
        this.pitch = 0;
        this.fix_pitch = 0;
        this.var_pitch = 0;
        this.roll = 0;
        this.fix_roll = 0;
        this.var_roll = 0;

        this.mouseDown = false;
        this.lastMouseX = null;
        this.lastMouseY = null;
        this.deltaX = null;
        this.deltaY = null;

        document.body.addEventListener("keydown", (event) => this.logKey(event), true);
        document.body.addEventListener("keyup", (event) => this.logKey(event), true);

        htmlCanvas.addEventListener("mousedown", (event) => this.handleMouseDown(event), true);
        htmlCanvas.addEventListener("mousemove", (event) => this.handleMouseMove(event), true);
        document.body.addEventListener("mouseup", (event) => this.handleMouseUp(event), false);
    }


    logKey(event) {
        this.keysPressed[event.code] = event.type === "keydown";
    };


    handleMouseDown(event) {
        this.mouseDown = true;
        const height = event.currentTarget.clientHeight;
        const width = event.currentTarget.clientWidth;
        this.lastMouseX = event.clientX - width / 2;
        this.lastMouseY = event.clientY - height / 2;
    }

    handleMouseUp(event) {
        this.mouseDown = false;
        this.fix_pitch = this.fix_pitch + this.var_pitch;
        this.var_pitch = 0;

        this.fix_roll = this.fix_roll + this.var_roll;
        this.var_roll = 0;
    }

    handleMouseMove(event) {
        if (!this.mouseDown) {
            return;
        }

        const height = event.currentTarget.clientHeight;
        const width = event.currentTarget.clientWidth;
        const newX = event.clientX - width / 2;
        const newY = event.clientY - height / 2;

        this.deltaX = newX - this.lastMouseX;
        this.deltaY = newY - this.lastMouseY;
    }

    update(timeElapsed) {
        let rotationMatrix = mat4.create();

        mat4.rotate(rotationMatrix, rotationMatrix, this.pitch, vec3.fromValues(0.0,1.0,0.0));
        mat4.rotate(rotationMatrix, rotationMatrix, this.yaw, vec3.fromValues(0.0,0.0,1.0));
        mat4.rotate(rotationMatrix, rotationMatrix, this.roll, vec3.fromValues(1.0,0.0,0.0));

        this.rotationMatrix = rotationMatrix;


        var direction = vec3.create();
        var up = vec3.create();
        var cross = vec3.create();
        vec3.transformMat4(direction,this.direction,this.rotationMatrix);
        vec3.transformMat4(up,this.up,this.rotationMatrix);
        vec3.cross(cross,direction,up);

        vec3.scale(cross,cross,this.speed);
        vec3.scale(direction,direction,this.speed);
        vec3.scale(up,up,this.speed);

        if(this.keysPressed["KeyW"]) {
            vec3.add(this.eye,this.eye,direction);
        }
        if(this.keysPressed["KeyQ"]) {
            vec3.subtract(this.eye,this.eye,cross);
        }
        if(this.keysPressed["KeyS"]) {
            vec3.subtract(this.eye,this.eye,direction);
        }
        if(this.keysPressed["KeyE"]) {
            vec3.add(this.eye,this.eye,cross);
        }
        if(this.keysPressed["Space"]) {
            vec3.add(this.eye,this.eye,up);
        }
        if(this.keysPressed["ShiftLeft"]) {
            vec3.subtract(this.eye,this.eye,up);
        }
        if(this.keysPressed["KeyA"]) {
            this.fix_pitch += this.rotSpeed;
        }
        if(this.keysPressed["KeyD"]) {
            this.fix_pitch -= this.rotSpeed;
        }

        if (this.mouseDown) {
            this.var_pitch = -this.deltaX /500;
            this.var_roll = this.deltaY /500;
        }

        this.pitch = this.fix_pitch + this.var_pitch;
        this.roll = this.fix_roll + this.var_roll;

    };

    projectionMatrix() {

        const fieldOfView = 45 * Math.PI / 180;   // in radians
        const aspect = this.ctx.canvas.clientWidth / this.ctx.canvas.clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();

        mat4.perspective(projectionMatrix,
            fieldOfView,
            aspect,
            zNear,
            zFar);

        return projectionMatrix;
    };

    viewMatrix() {

        var lookAt = vec3.create();

        var direction = vec3.create();
        var up = vec3.create();

        vec3.transformMat4(direction,this.direction,this.rotationMatrix);
        vec3.transformMat4(up,this.up,this.rotationMatrix);
        vec3.add(lookAt,this.eye,direction)

        const viewMatrix = mat4.create();
        mat4.lookAt(viewMatrix, this.eye, lookAt, up);

        return viewMatrix;
    };
}


