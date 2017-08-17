var Wind = function(x, y, force) {
	this.x = x;
	this.y = y;
	this.speed = 1.5 * scrollSpeed + 2;
	this.force = force;
	this.active = true;
	this.color = "#fff";
};
Wind.prototype.draw = function() {};
Wind.prototype.update = function() {};