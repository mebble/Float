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