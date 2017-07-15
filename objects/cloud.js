var Cloud = function(x, y, numParts, size) {
	this.x = x;
	this.y = y;
	this.numParts = numParts;
	this.size = size;

	this.color = color("#F2F2F2");
	this.shadowOff = 2;
	this.width = 100;
	this.height = 50;
	this.cloudParts = [];
	/*
	Linear function of this.size and scrollSpeed:
	speed = (slope * this.size + minSpeed) * scrollSpeed
	!refactor!
	*/
	this.speed = -scrollSpeed/2 + (-3/5) * (this.size + 0.1) + 0.1;

	//run on init
	this.initParts();
};
Cloud.prototype.initParts = function() {
	for (var i = 0; i < this.numParts; i++) {
		var px, py, pw;
		px = random(-this.width, this.width);
		py = random(-this.height, this.height);
		pw = random(0.3 * this.width, this.width);
		this.cloudParts.push({x: px, y: py, width: pw});
	}
};
Cloud.prototype.draw = function() {
	rectMode(CENTER);
	noStroke();
	push();
		translate(this.x, this.y);
		scale(this.size);
		for (var i = 0; i < this.cloudParts.length; i++) {
			var px, py, pw, ph, edge;
			px = this.cloudParts[i].x;
			py = this.cloudParts[i].y;
			pw = this.cloudParts[i].width;
			ph = 15;
			corner = 15;

			fill(SHADOW);
			rect(px + this.shadowOff, py + this.shadowOff, pw, ph, corner);
			fill(this.color);
			rect(px, py, pw, ph, corner);
		}
		/*
		stroke(255, 0, 0);
		point(0, 0);
		*/
	pop();
};
Cloud.prototype.update = function() {
	//!refactor! to allow -=
    this.x += this.speed;
};