/* GLOBALS */
var canvas;
var canvasWidth = 600;
var canvasHeight = 600;
var scrollSpeed = 1;

/* CONSTANTS */
const SHADOW = "rgba(130, 130, 130, 10)";
const SHADOW_OFF = 2;

/* OBJECTS */


function setup() {
	canvas = createCanvas(canvasWidth, canvasHeight);
	centerCanvas();
	angleMode(DEGREES);

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
	});
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - width) / 2;
	y = (windowHeight - height) / 2;
	canvas.position(x, y);
}