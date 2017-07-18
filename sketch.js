/* GLOBALS */
var canvasWidth = 600;
var canvasHeight = 600;
var scrollSpeed = 1;

/* CONSTANTS */
const SHADOW = "rgba(130, 130, 130, 1)";
const SHADOW_OFF = 2;

/* OBJECTS */
var cloud;
var sun;
var balloon;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	angleMode(DEGREES);

	//cloud = new Cloud(canvasWidth/2, canvasHeight/2, 5, 1);
	//sun = new Sun(canvasWidth/2, canvasHeight/2, 1.5);
	balloon = new Balloon({
		color: {
			pilot: "#007EFF",
			balloon: "#ff0000",
			rope: "#ffcc00",
			basket: "#BA6C07"
		}
	});
}

function draw() {
	background("#70EBFF");
	balloon.draw();
	balloon.update();
}