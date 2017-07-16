var Sun = function(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.scale = 1;
	this.freq = 4;
	this.amp = 0.1;
	this.bodyCol = color(255, 213, 0);
	this.rayCol = color(255, 132, 0);
};
Sun.prototype.draw = function() {
	var numRays = 12;
	var bodySize = 30;

	noStroke();

	push();
		translate(this.x, this.y);
		scale(this.scale);
		rotate(frameCount);

		//rays shadow
		push();
			rotate(SHADOW_OFF);
			fill(SHADOW);
			for (var i = 0; i < numRays; i++) {
				triangle(0, -25, 20, -5, -20, -5);
				rotate(360 / numRays);
			}
		pop();

		//rays
		push();
			fill(this.rayCol);
			for (var i = 0; i < numRays; i++) {
				triangle(0, -25, 20, -5, -20, -5);
				rotate(360 / numRays);
			}
		pop();

		//sun body
		rotate(-frameCount); //prevent sun body rotation
		fill(SHADOW);
		ellipse(0 + SHADOW_OFF - 1, 0 + SHADOW_OFF - 1, bodySize, bodySize);
		fill(this.bodyCol);
		ellipse(0, 0, bodySize, bodySize); 

		/*
		//debugger:
		stroke(255, 0, 0);
		point(5, 0);
		*/
	pop();
};
Sun.prototype.update = function() {
	//oscillate around the size
	this.scale = this.amp * sin(this.freq * frameCount) + this.size;
};