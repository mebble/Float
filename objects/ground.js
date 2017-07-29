var Ground = function(y, color) {
	this.y = y;
	this.color = color;
};
Ground.prototype.draw = function() {
	noStroke();
	fill(this.color);
	rect(-10, this.y, canvasWidth + 10, canvasHeight - this.y + 10);
};