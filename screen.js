/* ------------------------------
    	Screen States
------------------------------ */
function startScreen() {
	background(20);

	fill(255);
	textAlign(CENTER);
  	textSize(50);
  	textFont("Georgia");

	text("Musicus", width / 2, height / 2);
	textSize(20);
	text("An Interactive Music Visualiser", width / 2, height / 2 + 60);

	startButton.display();
	startButton.isClicked();
}

function mainScreen() {
	background(20);
	drawRain();	
  	drawAmp();
 	musicBox1.display();
  	// musicBox2.display();
}

var startButton = button(250, 400, 20);

function button(_x, _y, _colour) {
	var b = {
		x: _x,
		y: _y,
		w: 100,
		h: 50,
		colour: _colour,

		display: function() {
			fill(this.colour);
			rect(this.x , this.y, this.w, this.h, 2);
			textAlign(CENTER, CENTER);
			fill(255);
			text("Start", this.x + this.w/2, this.y + this.h/2);
		
			if(mouseX > this.x && 
				mouseY > this.y && 
				mouseX < this.x + this.w && 
				mouseY < this.y + this.h ) {
				fill(255);
				rect(this.x , this.y, this.w, this.h, 2);
				fill(20);
				text("Start", this.x + this.w/2, this.y + this.h/2);	
			};
		},

		isClicked: function() {		
			if (mouseX > this.x && 
				mouseY > this.y && 
				mouseX < this.x + this.w && 
				mouseY < this.y + this.h) {
	 				state = 1;
		  	}
		}
	}
	return b;
}