/* GLOBALS */
var canvas;
var canvasWidth = 600;
var canvasHeight = 600;
var scrollSpeed = 1;

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
	initQueue({
		queue: foreTreeQ,
		initNum: 25,
		xStep: 20,
		classType: Pine
	}, {
		topX: 0,
		topY: random(280, 330),
		color: "#0B936E"
	}, function(config, params) {
		config.topX += params.xStep;
		config.topY = random(400, 430);
	});
}

function draw() {
	background("#4cb5f5");
	ground.draw();
	foreTreeQ.forEach(function(elem) {
		elem.draw();
		elem.update();
	});
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - canvasWidth) / 2;
	y = (windowHeight - canvasHeight) / 2;
	canvas.position(x, y);
}