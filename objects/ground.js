var Ground = function(config) {
	this.x = config.x || 0;
	this.y = config.y || (5/6) * canvasHeight;
	this.color = config.color || "#000";
	this.extraBleed = 10;
	this.width = canvasWidth + (2 * this.extraBleed);
	this.height = canvasHeight - this.y + this.extraBleed;
};
Ground.prototype.draw = function() {
	noStroke();
	fill(this.color);
	rect(this.x - this.extraBleed, this.y, this.width, this.height);
};