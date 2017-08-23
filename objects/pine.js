var Pine = function(config) {
	this.topX = config.topX;
	this.topY = config.topY;
	this.baseY = config.baseY || (5/6) * canvasHeight;
	this.speed = config.speed || scrollSpeed;
	this.color = config.color || "#000";
	this.width = map(this.topY, 0, this.baseY, 400, 0);
	this.height = this.baseY - this.topY;
};
Pine.prototype.draw = function() {
	noStroke();
	fill(this.color);
	beginShape();
	vertex(this.topX, this.topY);
	vertex(this.topX - this.width/2, this.topY + this.height);
	vertex(this.topX + this.width/2, this.topY + this.height);
	endShape();
};
Pine.prototype.update = function() {
	this.topX -= this.speed;
};