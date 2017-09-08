var foreTreeQ = {
	queue: [],
	xStep: 30,
	classType: Pine,
	enterX: canvasWidth + 100,
	leaveX: -100,
	init: function(config) {
		while (config.topX < this.enterX) {
			this.queue.push(new this.classType(config));
			config.topX += this.xStep;
			config.topY = random(config.baseY - 100, config.baseY - 50);
		}
	},
	enterGranted: function() {
		var lastPine = this.queue[this.queue.length - 1];
		return lastPine.topX + lastPine.width/2 < this.enterX;
	},
	leaveGranted: function() {
		return this.queue[0].topX < this.leaveX;
	}
};
var backTreeQ = {
	queue: [],
	xStep: 30,
	classType: Pine,
	enterX: canvasWidth + 100,
	leaveX: -100,
	init: function(config) {
		while (config.topX < this.enterX) {
			this.queue.push(new this.classType(config));
			config.topX += this.xStep;
			config.topY = random(config.baseY - 130, config.baseY - 80);
		}
	},
	enterGranted: function() {
		var lastPine = this.queue[this.queue.length - 1];
		return lastPine.topX + lastPine.width/2 < this.enterX;
	},
	leaveGranted: function() {
		return this.queue[0].topX < this.leaveX;
	}
};
var foreCloudQ = {
	queue: [],
	classType: Cloud,
	enterX: canvasWidth + 300,
	leaveX: -300,
	enterGranted: function() {
		//!refactor!! push frequency attribute
		return ((frameCount % 500) == 0);
	},
	leaveGranted: function() {
		//!remove! when this.init() is made
		if (this.queue[0] == undefined) {
			return false;
		}
		return this.queue[0].x < this.leaveX;
	}
};
var backCloudQ = {
	queue: [],
	classType: Cloud,
	enterX: canvasWidth + 300,
	leaveX: -300,
	enterGranted: function() {
		return ((frameCount % 500) == 0);
	},
	leaveGranted: function() {
		if (this.queue[0] == undefined) {
			return false;
		}
		return this.queue[0].x < this.leaveX;
	}
};
var windQ = {
	queue: []
};
var mountainQ = {
	queue: []
};