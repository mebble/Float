function initQueue(Queue, config) {
	/**
	 * @param {Object} Queue - contains properties of the queue.
	 * @param {Object} config -  contains properties of each element of the queue.
	 */
	for (var i = 0; i < Queue.initNum; i++) {
		Queue.queue.push(new Queue.classType(config));
		Queue.modifyConfig(config);
	}
}

function enterStage(Queue, config) {
	if (Queue.enterGranted()) {
		Queue.queue.push(new Queue.classType(config));
	}
}

function leaveStage(Queue) {
	if (Queue.leaveGranted()) {
		Queue.queue.shift();
	}
}

function drawAll(Queues) {
	Queues.forEach(function(Queue) {
		Queue.queue.forEach(function(elem) {
			elem.draw();
		});
	});
}

function updateAll(Queues) {
	Queues.forEach(function(Queue) {
		Queue.queue.forEach(function(elem) {
			elem.update();
		});
	});
}