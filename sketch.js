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
		baseY: ground.y,
		topX: 0,
		topY: random(this.baseY - 100, this.baseY - 50),
		color: "#0B936E",
	});
	initQueue(backTreeQ, {
		baseY: ground.y,
		topX: 0,
		topY: random(this.baseY - 130, this.baseY - 80),
		color: "#18B978",
		scrollSpeed: 0.9 * scrollSpeed
	});
}

function draw() {
	background("#4cb5f5");
	ground.draw();
	drawAll([backTreeQ, foreTreeQ]);
	updateAll([backTreeQ, foreTreeQ]);
	enterStage(foreTreeQ, {
		baseY: ground.y,
		topX: canvasWidth + 100,
		topY: random(this.baseY - 100, this.baseY - 50),
		color: "#0B936E"
	});
	enterStage(backTreeQ, {
		baseY: ground.y,
		topX: canvasWidth + 100,
		topY: random(this.baseY - 130, this.baseY - 80),
		color: "#18B978",
		speed: 0.9 * scrollSpeed
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