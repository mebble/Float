function initQueue(params, modifyConfig) {
	/**
	 * initQueue:
	 * 'params' contains properties of the queue.
	 * 'params.config' contains properties of each element of the queue.
	 * 'modifyConfig' modifies the config object for the next queue element.
	 */

	/**
	 * modifyConfig:
	 * Modifies the params.config object based on the properties
	 * of the params object.
	 */
	 
	for (var i = 0; i < params.initNum; i++) {
		params.queue.push(new params.classType(params.config));
		modifyConfig(params);
	}
}

function enterStage(params, pushGranted) {
	if (pushGranted(params)) {
		params.queue.push(new params.classType(params.config));
	}
}