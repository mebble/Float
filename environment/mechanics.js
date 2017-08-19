function initQueue(qParams, modifyConfig) {
	var p = qParams;
	for (var i = 0; i < p.initNum; i++) {
		p.queue.push(new p.classType(p.config));
		modifyConfig(p.config);
	}
}