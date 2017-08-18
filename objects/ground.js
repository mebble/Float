var Ground = function(x, y, color) {
	this.x = x;
	this.y = y;
	this.extraBleed = 10;
	this.color = color;
};
Ground.prototype.draw = function() {
	noStroke();
	fill(this.color);
	rect(this.x - this.extraBleed,
		 this.y,
		 canvasWidth + (2 * this.extraBleed),
		 canvasHeight - this.y + this.extraBleed);
};