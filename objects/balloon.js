var Balloon = function(props) {
	this.x = props.x || canvasWidth/2;
	this.y = props.y || canvasHeight/2;
	this.velX = this.velY = 0;
	this.accX = 0.1;
	this.accY = 0.1;
	this.maxSpeed = 3;

	this.scale = props.scale || 1;
	this.color = props.color || {
		pilot: "#000",
		balloon: "#000",
		rope: "#000",
		basket: "#000"
	};
	this.npc = props.npc || false;
};
Balloon.prototype.draw = function() {
	var ropeLen, basketX, basketY, basketW, basketH, balloonSize;
	ropeLen = 85;
	basketW = 40;
	basketH = 20;
	balloonSize = 120;

	push();
	{
		rectMode(CENTER);
		translate(this.x, this.y); //(0, 0) is center of balloon
		scale(this.scale);
		basketX = 0;
		basketY = 0 + ropeLen;

		//ropes
		strokeWeight(3);
		stroke(this.color.rope);
		for (var i = -1; i <= 1; i++) {
			line(0 + i * (basketW/3), 0, 0 + i * (basketW/3), basketY);
		}

		noStroke();

		//balloon
		fill(this.color.balloon);
		rect(0, 0 + 55, basketW, basketH, 3);
		ellipse(0, 0, balloonSize, balloonSize);

		//basket
		fill(this.color.basket);
		rect(basketX, basketY, basketW, basketH, 3);
	}
	pop();	
};
Balloon.prototype.update = function() {
	/* update position */
	this.x += this.velX;
	this.y += this.velY;

	/* update velocity */
	if (keys[RIGHT_ARROW]) {
		this.velX += this.accX;
	} else if (keys[LEFT_ARROW]) {
		this.velX -= this.accX;
	} else {
		//slow down (ballon will wander)
		if (this.velX > 0) {
			this.velX -= AIR_RESIST;
		} else {
			this.velX += AIR_RESIST;
		}
	}

	if (keys[UP_ARROW]) {
		this.velY -= this.accY;
	} else if (keys[DOWN_ARROW]) {
		this.velY += this.accY;
	} else {
		//slow down (ballon will wander)
		if (this.velY > 0) {
			this.velY -= AIR_RESIST;
		} else {
			this.velY += AIR_RESIST;
		}

		//oscillate !refactor!
		//this.velY = 0.3 * sin(4 * frameCount) + this.velY;
	}

	this.velX = constrain(this.velX, -this.maxSpeed, this.maxSpeed);
	this.velY = constrain(this.velY, -this.maxSpeed, this.maxSpeed);

	/* update acceleration */

	/*
	//debugger:
	console.log(this.velX, this.velY);
	*/
};