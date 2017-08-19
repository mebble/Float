function initQueue(queue, params) {
	var p = params;
	var x;
	for (var i = 0; i < p.initNum; i++) {
		x = p.xStart + i * p.xStep;
		queue.push(new p.classType(p.config));
	}
}