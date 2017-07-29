var Mountain = function(peakX, baseY, width, height) {
	this.corners = {
		peak: [peakX, baseY - height],
		left: [peakX - width/2, baseY],
		middle: [peakX, baseY],
		right: [peakX + width/2, baseY]
	};
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
	var snowY = this.calcSnowcapHeight();
};
Mountain.prototype.calcSnowcapHeight = function() {
	/**
	 *	Calculate snowcap height based on params using
	 *	linear equations. Return an object of results
	 */
};