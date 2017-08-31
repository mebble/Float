/* CONSTANTS */
const SHADOW = "rgba(130, 130, 130, 10)";
const SHADOW_OFF = 2;

/* OBJECTS */
var ground;

function setup() {
	canvas = createCanvas(canvasWidth, canvasHeight);
	centerCanvas();
	angleMode(DEGREES);

	ground = new Ground({
		color: "#1CE29F"
	});
	initQueue(foreTreeQ, {	
		topX: 0,
		topY: random(ground.y - 100, ground.y - 50),
		color: "#0B936E",
		baseY: ground.y
	});
	initQueue(backTreeQ, {
		topX: 0,
		topY: random(ground.y - 130, ground.y - 80),
		color: "#18B978",
		scrollSpeed: 0.9 * scrollSpeed,
		baseY: ground.y
	});
}

function draw() {
	background("#4cb5f5");
	ground.draw();
	drawAll([backTreeQ, foreTreeQ]);
	updateAll([backTreeQ, foreTreeQ]);
	enterStage(foreTreeQ, {
		topX: canvasWidth + 100,
		topY: random(ground.y - 100, ground.y - 50),
		color: "#0B936E",
		baseY: ground.y
	});
	enterStage(backTreeQ, {
		topX: canvasWidth + 100,
		topY: random(ground.y - 130, ground.y - 80),
		color: "#18B978",
		speed: 0.9 * scrollSpeed,
		baseY: ground.y
	});
	leaveStage(foreTreeQ);
	leaveStage(backTreeQ);
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - canvasWidth) / 2;
	y = (windowHeight - canvasHeight) / 2;
	canvas.position(x, y);
}