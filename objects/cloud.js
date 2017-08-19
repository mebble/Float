var Cloud = function(config) {
	this.x = config.x;
	this.y = config.y;
	this.numParts = config.numParts;
	this.size = config.size;
	this.color = config.color || "#F2F2F2";
	this.width = config.width || 100;
	this.height = config.height || 50;

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
	{
		translate(this.x, this.y);
		scale(this.size);
		for (var i = 0; i < this.cloudParts.length; i++) {
			var px, py, pw, ph, corner;
			px = this.cloudParts[i].x;
			py = this.cloudParts[i].y;
			pw = this.cloudParts[i].width;
			ph = 15;
			corner = 15;

			fill(SHADOW);
			rect(px + SHADOW_OFF, py + SHADOW_OFF, pw, ph, corner);
			fill(this.color);
			rect(px, py, pw, ph, corner);
		}
		/*
		//debugger:
		stroke(255, 0, 0);
		point(0, 0);
		*/
	}
	pop();
};
Cloud.prototype.update = function() {
	//!refactor! to allow -=
    this.x += this.speed;
};