var foreTreeQ = {
	queue: [],
	classType: Pine,
	enterX: canvasWidth + 100,
	leaveX: -100,
	init: function(config) {
		var xStep = 30;
		while (config.topX < this.enterX) {
			this.queue.push(new this.classType(config));

			//mutate config
			config.topX += xStep;
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
	classType: Pine,
	enterX: canvasWidth + 100,
	leaveX: -100,
	init: function(config) {
		var xStep = 30;
		while (config.topX < this.enterX) {
			this.queue.push(new this.classType(config));

			//mutate config
			config.topX += xStep;
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
	init: function(config) {
		var xStep = 200;
		while (config.x < this.enterX) {
			this.queue.push(new this.classType(config));

			//mutate config
			config.x += xStep;
			config.y = random(0, ground.y - 130);
			config.numParts = floor(random(1, 5));
			config.size = random(1, 1.5);
		}
	},
	enterGranted: function() {
		//!refactor!! push frequency attribute
		return ((frameCount % 500) == 0);
	},
	leaveGranted: function() {
		return this.queue[0].x < this.leaveX;
	}
};
var backCloudQ = {
	queue: [],
	classType: Cloud,
	enterX: canvasWidth + 300,
	leaveX: -300,
	init: function(config) {
		var xStep = 150;
		while (config.x < this.enterX) {
			this.queue.push(new this.classType(config));

			//mutate config
			config.x += xStep;
			config.y = random(0, ground.y - 130);
			config.numParts = floor(random(1, 8));
			config.size = random(0.5, 1);
		}
	},
	enterGranted: function() {
		return ((frameCount % 500) == 0);
	},
	leaveGranted: function() {
		return this.queue[0].x < this.leaveX;
	}
};
var windQ = {
	queue: []
};
var mountainQ = {
	queue: []
};