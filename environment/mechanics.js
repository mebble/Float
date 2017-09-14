function centerCanvas() {
	var x, y;
	x = (window.innerWidth - canvasWidth) / 2;
	y = (window.innerHeight - canvasHeight) / 2;
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

function drawQueue(Queue) {
	Queue.queue.forEach(function(elem) {
		elem.draw();
	});
}

function updateAllQueues(Queues) {
	Queues.forEach(function(Queue) {
		Queue.queue.forEach(function(elem) {
			elem.update();
		});
	});
}