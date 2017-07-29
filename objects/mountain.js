var Mountain = function(params) {
	/**
	params = {
		peak: [],
		left: [],
		middle: [],
		right: []
	}
	*/
	this.params = params;
	this.leftShade = color(232, 167, 130);
	this.rightShade = color(194, 149, 128);
};
Mountain.prototype.draw = function() {
	/* mountain */
	beginShape(TRIANGLE_STRIP);
	fill(this.leftShade);
	vertex(...this.params.left);
	vertex(...this.params.peak);
	vertex(...this.params.middle);
	fill(this.rightShade);
	vertex(...this.params.right);
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