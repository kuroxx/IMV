/* ------------------------------
    	Screen States
------------------------------ */
function startScreen() {
	fill(255);
	textAlign(CENTER);
  	textSize(50);
  	textFont("Georgia");

	text("Musicus", width / 2, height / 2);
	textSize(20);
	text("An Interactive Music Visualiser", width / 2, height / 2 + 60);

	startButton.display();
	howToButton.display();
}

function mainScreen() {
	drawRain();	
  	drawAmp();
 	// drawMusicBox();
}

function instructionScreen () {
	fill(255);
	textAlign(CENTER);
  	textSize(50);
  	textFont("Georgia");

	text("How to play", width / 2, height / 6);
	textSize(20);
	text("An Interactive Music Visualiser", width / 2, height / 3 );

}

/* ------------------------------
    	Buttons
------------------------------ */
var startButton = button(200, 400, 20, "Start");
var howToButton = button(300, 400, 20, "How to");

function button(_x, _y, _colour, _label) {
	var b = {
		x: _x,
		y: _y,
		w: 100,
		h: 50,
		colour: _colour,
		label: _label,

		display: function() {
			fill(this.colour);
			rect(this.x , this.y, this.w, this.h, 2);
			textAlign(CENTER, CENTER);
			fill(255);
			text(this.label, this.x + this.w/2, this.y + this.h/2);
		
			if(mouseX > this.x && 
				mouseY > this.y && 
				mouseX < this.x + this.w && 
				mouseY < this.y + this.h ) {
				fill(255);
				rect(this.x , this.y, this.w, this.h, 2);
				fill(20);
				text(this.label, this.x + this.w/2, this.y + this.h/2);	
			};
		}
	}
	return b;
}

function mousePressed () {
	if (mouseX > startButton.x && 
		mouseY > startButton.y && 
		mouseX < startButton.x + startButton.w && 
		mouseY < startButton.y + startButton.h && 
		state == 0) {
			state = 1;
  	} else if (mouseX > howToButton.x && 
		mouseY > howToButton.y && 
		mouseX < howToButton.x + howToButton.w && 
		mouseY < howToButton.y + howToButton.h && 
		state == 0) {
			state = 2;
  	} else {
  		return false;
  	}
}

function keyPressed () {
	if (keyCode == ESCAPE) {
		state = 0;
	}

	// if (keyCode == SPACEBAR && state == 1){
	// 	// Do something...
	// }

	return false; // To prevent any default behaviour
}