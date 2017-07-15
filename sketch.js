var canvasWidth = 0.9 * (window.innerWidth);
var canvasHeight = 600;

/* GLOBALS */
var scrollSpeed = 1;

/* CONSTANTS */
const SHADOW = "rgba(170, 170, 170, 150)";

/* OBJECTS */
var cloud;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	cloud = new Cloud(canvasWidth/2, canvasHeight/2, 5, 1);
}

function draw() {
	background("#70EBFF");
	cloud.draw();
	cloud.update();
}