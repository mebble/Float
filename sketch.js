function setup() {
	canvas = createCanvas(canvasWidth, canvasHeight);
	centerCanvas();
	angleMode(DEGREES);

	allQueues = [backTreeQ, backCloudQ, foreTreeQ, foreCloudQ];
	ground = new Ground({
		color: "#1CE29F"
	});
	balloon = new Balloon({});
	foreTreeQ.init({
		topX: 0,
		topY: random(ground.y - 100, ground.y - 50),
		color: "#0B936E",
		baseY: ground.y
	});
	backTreeQ.init({
		topX: 0,
		topY: random(ground.y - 130, ground.y - 80),
		color: "#18B978",
		speed: 0.9 * scrollSpeed,
		baseY: ground.y
	});
}

function draw() {
	background("#4cb5f5");

	/* draw objects in order */
	ground.draw();
	drawQueue(backTreeQ);
	drawQueue(backCloudQ);
	drawQueue(foreTreeQ);
	balloon.draw();
	drawQueue(foreCloudQ);

	/* update objects*/
	updateAllQueues(allQueues);
	balloon.update();
	enterStage(foreTreeQ, {
		topX: foreTreeQ.enterX,
		topY: random(ground.y - 100, ground.y - 50),
		color: "#0B936E",
		baseY: ground.y
	});
	enterStage(backTreeQ, {
		topX: backTreeQ.enterX,
		topY: random(ground.y - 130, ground.y - 80),
		color: "#18B978",
		speed: 0.9 * scrollSpeed,
		baseY: ground.y
	});
	enterStage(foreCloudQ, {
		x: foreCloudQ.enterX,
		y: random(0, ground.y - 130),
		numParts: floor(random(1, 5)),
		size: random(1, 1.5)
	});
	enterStage(backCloudQ, {
		x: backCloudQ.enterX,
		y: random(0, ground.y - 130),
		numParts: floor(random(1, 8)),
		size: random(0.5, 1)
	});
	leaveStage(foreTreeQ);
	leaveStage(backTreeQ);
	leaveStage(foreCloudQ);
	leaveStage(backCloudQ);
}