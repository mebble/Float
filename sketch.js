/* GLOBALS */
var canvasWidth = 600;
var canvasHeight = 600;
var scrollSpeed = 1;

/* CONSTANTS */
const SHADOW = "rgba(84, 84, 84, 150)";
const SHADOW_OFF = 2;

/* OBJECTS */
var cloud;
var sun;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	angleMode(DEGREES);

	//cloud = new Cloud(canvasWidth/2, canvasHeight/2, 5, 1);
	sun = new Sun(500, 500, 1.5);
}

function draw() {
	background("#70EBFF");
	sun.draw();
	sun.update();
}