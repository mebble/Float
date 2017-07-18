var Balloon = function(props) {
	this.x = props.x || canvasWidth/2;
	this.y = props.y || canvasHeight/2;
	this.velX = this.velY = 0;
	this.speed = 2;
	this.size = props.size || 120;
	this.color = props.color || {
		pilot: "#000",
		balloon: "#000",
		rope: "#000",
		basket: "#000"
	};
	this.npc = props.npc || false;
};
Balloon.prototype.draw = function() {
	var ropeLen = 80;
	var basketX = this.x;
	var basketY = this.y + ropeLen;
	var basketW = 40;
	var basketH = 20;

	/*
	!refactor!
	Hard code the size of balloon and use
	scale to resize it for different instances
	*/

	//ropes
	strokeWeight(4);
	stroke("#A84B48");
	for (var i = -1; i <= 1; i++) {
		line(this.x + i * (basketW/3), this.y, this.x + i * (basketW/3), basketY);
	}

	noStroke();
	//balloon
	fill(this.color.balloon);
	ellipse(this.x, this.y, this.size, this.size);

	//basket
	rectMode(CENTER);
	fill(this.color.basket);
	rect(basketX, basketY, basketW, basketH, 3);
};
Balloon.prototype.update = function() {
	//main movement update
	this.x += this.velX;
	this.y += this.velY;

	if (keys[UP_ARROW]) {
		this.velY = -this.speed;
	} else if (keys[DOWN_ARROW]) {
		this.velY = this.speed;
	} else {
		this.velY = 0;
	}

	if (keys[RIGHT_ARROW]) {
		this.velX = this.speed;
	} else if (keys[LEFT_ARROW]) {
		this.velX = -this.speed;
	} else {
		this.velX = 0;
	}
};