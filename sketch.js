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
	
	ground = new Ground((5/6) * canvasHeight, "#000");
	initQueue({
		queue: foreTreeQ,
		initNum: 25,
		xStart: 0,
		xStep: 20,
		classType: Pine,
		config: {
			topX: 0,
			topY: random(280, 330),
			color: "#0B936E"
		}
	}, function(config) {
		config.topX += qParams.xStep;
		config.topY = random(280, 330);
	});
}

function draw() {
	background("#4cb5f5");
	foreTreeQ.forEach(function(elem) {
		elem.draw();
		elem.update();
	});
	ground.draw();
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - width) / 2;
	y = (windowHeight - height) / 2;
	canvas.position(x, y);
}