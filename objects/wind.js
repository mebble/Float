var Wind = function(config) {
	this.x = config.x;
	this.y = config.y;
	this.force = config.force || 0.15;
	this.isActive = config.isActive || true;
	this.speed = 1.5 * scrollSpeed + 2;
	this.color = "#fff";
};
Wind.prototype.draw = function() {
	noFill();
	stroke(this.color);
	strokeWeight(2);
	push();
	{
		translate(this.x, this.y);
		//top
		arc(-5, -15, 10, 10, 90, 300);
		line(-5, -15+10/2, 30, -15+10/2);
		//middle
		arc(-15, 5, 16, 16, 50, 270);
		line(-15, 5-16/2, 15, 5-16/2);
		line(20, 5-16/2, 55, 5-16/2);
		//bottom
		arc(0, 10, 8, 8, 20, 270);
		line(0, 10-8/2, 40, 10-8/2);
		/*
		debugger:
		point(0, 0);
		*/
	}
	pop();
};
Wind.prototype.update = function() {
	this.x -= this.speed;
};