/* GLOBALS */
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
	createCanvas(canvasWidth, canvasHeight);
	angleMode(DEGREES);
	ground = new Ground(5/6 * canvasHeight, '#6DBE40');
	mountain = new Mountain(canvasWidth/2, ground.y, 300, 270);
}

function draw() {
	background("#4cb5f5");
	mountain.draw();
	ground.draw();
}