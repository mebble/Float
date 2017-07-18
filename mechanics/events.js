/* KEYBOARD */
var keys = [];

function keyPressed() {
	keys[keyCode] = true;
	return false; //prevent default browser behaviour
}

function keyReleased() {
	keys[keyCode] = false;
	return false; //prevent default browser behaviour
}