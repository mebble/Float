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
			balloon: "#ce5a57",
			rope: "#e45641",
			basket: "#73605b"
		}
	});
}

function draw() {
	background("#4cb5f5");
	balloon.draw();
	balloon.update();
}