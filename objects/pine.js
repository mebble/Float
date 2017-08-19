var Pine = function(config) {
	this.topX = config.topX;
	this.topY = config.topY;
	this.speed = config.speed || scrollSpeed;
	this.color = config.color || "#000";
	this.width = ((0 - 200)/(ground.y - 0)) * (this.topY - 0) + 200;
	this.height = ground.y - this.topY;
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