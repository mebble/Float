/* KEYBOARD */
var keys = [];

function keyPressed() {
	keys[keyCode] = true;
	//return false; //disables browser keyboard shortcuts
}

function keyReleased() {
	keys[keyCode] = false;
	//return false; //disables browser keyboard shortcuts
}