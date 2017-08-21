function initQueue(params, modifyConfig) {
	/**
	 * initQueue(params, config, modifyConfig);
	 * 'params' contains properties of the queue.
	 * 'config' contains properties of each element of the queue.
	 * 'modifyConfig' modifies the config object for the next queue element.
	 *
	 * The config object arg into initQueue is the inital config object,
	 * which holds the properties of the first initialized elem of the queue.
	 */

	/**
	 * modifyConfig(config, params);
	 * Modifies the config object based on the properties
	 * of the params object.
	 */
	for (var i = 0; i < params.initNum; i++) {
		params.queue.push(new params.classType(params.config));
		modifyConfig(params);
	}
}

function pushToCanvas(params, pushGranted) {
	if (pushGranted(params)) {
		params.queue.push(new params.classType(params.config));
	}
}