function initQueue(queue, params) {
	var p = params;
	var x;
	for (var i = 0; i < p.initNum; i++) {
		x = p.xStart + i * p.xStep;
		queue.push(new p.classType(x, random(0.7 * canvasHeight, 0.8 * canvasHeight), "#D27C2C", scrollSpeed));
	}
}