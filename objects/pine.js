var Pine = function(topX, topY, col, speed) {
	this.topX = topX;
	this.topY = topY;
	this.width = ((0 - 200)/(ground.y - 0)) * (this.topY - 0) + 200;
	this.height = ground.y - this.topY;
	this.speed = speed;
	this.color = col;
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