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
		initNum: 30,
		xStep: 20,
		classType: Pine,
		config: {
			topX: 0,
			topY: random(ground.y - 100, ground.y - 50),
			color: "#0B936E"
		}
	}, function(params) {
		params.config.topX += params.xStep;
		params.config.topY = random(ground.y - 100, ground.y - 50);
	});
}

function draw() {
	background("#4cb5f5");
	ground.draw();
	foreTreeQ.forEach(function(elem) {
		elem.draw();
		elem.update();
	});

	enterStage({
		queue: foreTreeQ,
		classType: Pine,
		config: {
			topX: canvasWidth + 10,
			topY: random(ground.y - 100, ground.y - 50),
			color: "#0B936E"
		}
	}, function(p) {
		var lastPine = p.queue[p.queue.length-1];
		return lastPine.topX + lastPine.width/2 < canvasWidth + 10;
	});
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - canvasWidth) / 2;
	y = (windowHeight - canvasHeight) / 2;
	canvas.position(x, y);
}