var Balloon = function(props) {
	this.x = props.x || canvasWidth/2;
	this.y = props.y || canvasHeight/2;
	this.size = props.size || 120;
	this.color = props.color || {
		pilot: "#000",
		balloon: "#000",
		rope: "#000"
	};
};