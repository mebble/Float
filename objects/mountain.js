var Mountain = function(peakX, baseY, width, height) {
	this.width = width;
	this.height = height;
	this.corners = {
		peak: [peakX, baseY - this.height],
		left: [peakX - this.width/2, baseY],
		middle: [peakX, baseY],
		right: [peakX + this.width/2, baseY]
	};
	this.snow = this.calcSnow(this.corners);
	this.snowCol = "#ffffff";
	this.leftShade = color(232, 167, 130);
	this.rightShade = color(194, 149, 128);
};
Mountain.prototype.draw = function() {
	noStroke();
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
	var snowYStart = m.peak[1] + this.height/3;
	var snowYStop = snowYStart;
	var snowXStart = ((m.peak[0] - m.left[0]) * (snowYStart - m.left[1])) / (m.peak[1] - m.left[1]) + m.left[0]; //equation of a line using two known points
	var snowXStop = m.peak[0] + (m.peak[0] - snowXStart);

	var vertices = [
		{x: m.peak[0], y: m.peak[1]},
		{x: snowXStart, y: snowYStart}
	];
	(function pushVertices() {
		var numVertices = floor(random(2, 6));
		var snowX = snowXStart;
		var step = -1;
		var capWidth = snowXStop - snowXStart;

		for (var i = 0; i < numVertices; i++) {
			snowX = snowXStart + (i + 1) * (capWidth / numVertices);
			snowY = snowYStart + step * floor(random(20));
			step = -step;
			vertices.push({x: snowX, y: snowY});
		}
		vertices.push({x: snowXStop, y: snowYStop});
	})();

	return {
		"vertices": vertices,
		drawVertices: function() {
			for (var i = 0; i < this.vertices.length; i++) {
				vertex(this.vertices[i].x, this.vertices[i].y);
			}
		}
	};
};