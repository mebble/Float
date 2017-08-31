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
		queue: backTreeQ,
		initNum: 30,
		xStep: 30,
		classType: Pine,
		config: {
			topX: 0,
			topY: random(ground.y - 130, ground.y - 80),
			color: "#18B978",
			baseY: ground.y,
			speed: 0.9 * scrollSpeed
		}
	}, function(p) {
		p.config.topX += p.xStep;
		p.config.topY = random(ground.y - 130, ground.y - 80);
	});
	initQueue({
		queue: foreTreeQ,
		initNum: 30,
		xStep: 30,
		classType: Pine,
		config: {
			topX: 0,
			topY: random(ground.y - 100, ground.y - 50),
			color: "#0B936E",
			baseY: ground.y
		}
	}, function(p) {
		p.config.topX += p.xStep;
		p.config.topY = random(ground.y - 100, ground.y - 50);
	});
}

function draw() {
	background("#4cb5f5");
	ground.draw();
	backTreeQ.forEach(function(elem) {
		elem.draw();
		elem.update();
	});
	foreTreeQ.forEach(function(elem) {
		elem.draw();
		elem.update();
	});
	enterStage({
		queue: backTreeQ,
		classType: Pine,
		enterX: canvasWidth + 100,
		config: {
			topX: null,
			topY: random(ground.y - 130, ground.y - 80),
			color: "#18B978",
			baseY: ground.y,
			speed: 0.9 * scrollSpeed
		}
	}, function(p) {
		var lastPine = p.queue[p.queue.length-1];
		p.config.topX = p.enterX; // ugly hack
		return lastPine.topX + lastPine.width/2 < p.enterX;
	});
	enterStage({
		queue: foreTreeQ,
		classType: Pine,
		enterX: canvasWidth + 100,
		config: {
			topX: null, //hack below
			topY: random(ground.y - 100, ground.y - 50),
			color: "#0B936E",
			baseY: ground.y
		}
	}, function(p) {
		var lastPine = p.queue[p.queue.length-1];
		p.config.topX = p.enterX; // ugly hack to access enterX from config
		return lastPine.topX + lastPine.width/2 < p.enterX;
	});
	leaveStage({
		queue: foreTreeQ,
		leaveX: -100
	}, function(p) {
		return p.queue[0].topX < p.leaveX;
	});
	leaveStage({
		queue: backTreeQ,
		leaveX: -100
	}, function(p) {
		return p.queue[0].topX < p.leaveX;
	});
}

function centerCanvas() {
	var x, y;
	x = (windowWidth - canvasWidth) / 2;
	y = (windowHeight - canvasHeight) / 2;
	canvas.position(x, y);
}