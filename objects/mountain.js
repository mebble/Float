var Mountain = function(config) {
	this.x = 0; //ugly hack :(
	this.speed = config.speed || 0.2 * scrollSpeed;
	this.width = config.width;
	this.height = config.height;
	this.corners = {
		peak: [config.peakX, config.baseY - this.height],
		left: [config.peakX - this.width/2, config.baseY],
		middle: [config.peakX, config.baseY],
		right: [config.peakX + this.width/2, config.baseY]
	};
	this.snow = this.calcSnow(this.corners);
	this.snowCol = config.snowCol || "#ffffff";
	this.leftShade = config.leftShade || color(232, 167, 130);
	this.rightShade = config.rightShade || color(194, 149, 128);
};
Mountain.prototype.draw = function() {
	noStroke();

	push();
	{
		translate(this.x, 0);  //ugly hack :(
		/* mountain */
		beginShape(TRIANGLE_STRIP);
		fill(this.leftShade);
		vertex(...this.corners.left);
		vertex(...this.corners.peak);
		vertex(...this.corners.middle);
		fill(this.rightShade);
		vertex(...this.corners.right);
		endShape();

		/* snowcap */
		fill(this.snowCol);
		beginShape();
		this.snow.drawVertices();
		endShape();
	}
	pop();

	/*
	//debugger:
	console.log(snow.x, snow.y, mouseX, mouseY);
	*/
};
Mountain.prototype.calcSnow = function(m) {
	/**
	 *	Return a snowcap object
	 *	based on mountain corners using a linear equation
	 */
	var snowYStart = m.peak[1] + this.height/2;
	var snowYStop = snowYStart;
	var snowXStart = ((m.peak[0] - m.left[0]) * (snowYStart - m.left[1])) / (m.peak[1] - m.left[1]) + m.left[0]; //equation of a line using two known points
	var snowXStop = m.peak[0] + (m.peak[0] - snowXStart);

	var vertices = [
		{x: m.peak[0], y: m.peak[1]},
		{x: snowXStart, y: snowYStart}
	];
	(function pushVertices() {
		var numVertices = floor(random(5, 8));
		var snowX, snowY;
		var capWidth = snowXStop - snowXStart;
		var capRange = 50;

		for (var i = 0; i < numVertices; i++) {
			snowX = snowXStart + (i + 1) * (capWidth / numVertices);
			snowY = snowYStart + round(random(-1, 1)) * adjustYRange(snowX, capRange);
			vertices.push({x: snowX, y: snowY});
		}
		vertices.push({x: snowXStop, y: snowYStop});
	})();

	function adjustYRange(x, capRange) {
		/**
		 * Set the amount of y deviation based on x value
		 * using inverted abs function
		 */
		var a = map(x, snowXStart, snowXStop, -capRange, capRange);
		return -abs(a) + capRange;
	}

	return {
		"vertices": vertices,
		drawVertices: function() {
			for (var i = 0; i < this.vertices.length; i++) {
				vertex(this.vertices[i].x, this.vertices[i].y);
			}
		}
	};
};
Mountain.prototype.update = function() {
	this.x -= this.speed; //ugly hack :(
};