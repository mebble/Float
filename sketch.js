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
	ground = new Ground(0, 5/6 * canvasHeight, "#1CE29F");
	initQueue(foreTreeQ, {
		initNum: 25,
		xStart: 0,
		xStep: 20,
		classType: Pine
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
	x = (windowWidth - canvasWidth) / 2;
	y = (windowHeight - canvasHeight) / 2;
	canvas.position(x, y);
}