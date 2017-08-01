/* GLOBALS */
var canvas;
var canvasWidth = 600;
var canvasHeight = 600;
var scrollSpeed = 1;

/* CONSTANTS */
const SHADOW = "rgba(130, 130, 130, 10)";
const SHADOW_OFF = 2;

/* OBJECTS */
var mountain;
var ground;

function setup() {
	canvas = createCanvas(canvasWidth, canvasHeight);
	centerCanvas();

	angleMode(DEGREES);
	ground = new Ground(5/6 * canvasHeight, '#6DBE40');
	mountain = new Mountain(canvasWidth/2, ground.y, 400, 270);
}

function draw() {
	background("#4cb5f5");
	mountain.draw();
	mountain.update();
	ground.draw();
}

function windowResized() {
	centerCanvas();
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - width) / 2;
	y = (windowHeight - height) / 2;
	canvas.position(x, y);
}