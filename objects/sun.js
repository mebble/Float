var Sun = function(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.scale = 1;
	this.freq = 4;
	this.amp = 1.5;
	this.bodyCol = color(255, 213, 0);
	this.rayCol = color(255, 132, 0);
};
Sun.prototype.draw = function() {
	noStroke();
	push();
		translate(this.x, this.y);
		scale(this.scale);
		rotate(frameCount);
		fill(this.bodyCol);
		ellipse(0, 0, this.size, this.size);
	pop();
};
Sun.prototype.update = function() {
	//!refactor!
	this.scale = this.amp * sin(this.freq * frameCount) + 1;
};