function centerCanvas() {
	var x, y;
	x = (windowWidth - canvasWidth) / 2;
	y = (windowHeight - canvasHeight) / 2;
	canvas.position(x, y);
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

function drawAllQueues(Queues) {
	Queues.forEach(function(Queue) {
		Queue.queue.forEach(function(elem) {
			elem.draw();
		});
	});
}

function updateAllQueues(Queues) {
	Queues.forEach(function(Queue) {
		Queue.queue.forEach(function(elem) {
			elem.update();
		});
	});
}