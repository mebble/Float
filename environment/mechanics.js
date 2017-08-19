function initQueue(params, config, modifyConfig) {
	for (var i = 0; i < params.initNum; i++) {
		params.queue.push(new params.classType(config));
		modifyConfig(config, params);
	}
}