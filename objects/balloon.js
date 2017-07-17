var Balloon = function(props) {
	this.x = props.x || canvasWidth/2;
	this.y = props.y || canvasHeight/2;
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
	noStroke();

	//ropes
	strokeWeight(5);
	stroke("#A84B48");
	for (var i = -1; i <= 1; i++) {
		line(this.x + i * (basketW/3), this.y, this.x + i * (basketW/3), basketY);
	}

	//balloon
	fill(this.color.balloon);
	ellipse(this.x, this.y, this.size, this.size);

	//basket
	rectMode(CENTER);
	fill(this.color.basket);
	rect(basketX, basketY, basketW, basketH);
};
Balloon.prototype.update = function() {

};