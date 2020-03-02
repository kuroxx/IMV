/* ------------------------------
    	Screen States
------------------------------ */
var screen = true;

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
	// Buttons
	playNoteButton.display();
	song1Button.display();
	song2Button.display();
	song3Button.display();
	
	drawRain();	
 	drawMusicBox();
 	navigator();

 	if (screen) {
 		drawAmp();
 	} else if (!screen) {
 		drawGalaxy();
 	}
}

function instructionScreen () {
	fill(255);
	textAlign(CENTER);
  	textFont("Georgia");
  
  	textSize(50);
	text("How to play", width / 2, height / 6);
	
	stroke(255);
	line(100, height / 6 + 50, 500, height / 6 + 50);

	textSize(20);
	text("Use MOUSE to click, draw and aim over the boxes", width / 2, height / 3 );
	text("Use ARROW KEYS to navigate and create beats", width / 2, height / 3 + 50);
	text("Use the SPACEBAR to switch screens", width / 2, height / 3 + 100);
	text("(Press Esc to go back)", width / 2, height / 3 + 150);

	textSize(50);
  	text("Get creative!", width / 2, height / 2 + 200);
}
/* ------------------------------
    	Buttons
------------------------------ */
var startButton = new button(200, 400, 20, "Start");
var howToButton = new button(300, 400, 20, "How to");
var playNoteButton = new button (250, 550, 50, "Play Note");
var song1Button = new button (10, 10, 50, "Song1");
var song2Button = new button (120, 10, 50, "Song2");
var song3Button = new button (230, 10, 50, "Song3");

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
	// Start Screen
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

	// Main Screen
	// Playe Note
	} else if (mouseX > playNoteButton.x && 
		mouseY > playNoteButton.y && 
		mouseX < playNoteButton.x + playNoteButton.w && 
		mouseY < playNoteButton.y + playNoteButton.h && 
		state == 1) {
			playNote();

	// Song1
	} else if (mouseX > song1Button.x && 
		mouseY > song1Button.y && 
		mouseX < song1Button.x + song1Button.w && 
		mouseY < song1Button.y + song1Button.h && 
		state == 1 && !music[1].isPlaying() && !music[2].isPlaying()) {

			if (!music[0].isPlaying()){
				music[0].play();
		    	music[0].setVolume(1);
			} else {
			  	music[0].stop(); 
			}	

	// Song2
	} else if (mouseX > song2Button.x && 
		mouseY > song2Button.y && 
		mouseX < song2Button.x + song2Button.w && 
		mouseY < song2Button.y + song2Button.h && 
		state == 1 && !music[0].isPlaying() && !music[2].isPlaying()) {

			if (!music[1].isPlaying()){
				music[1].play();
		    	music[1].setVolume(1);
			} else {
			  	music[1].stop(); 
			}	

	//Song3	
	} else if (mouseX > song3Button.x && 
		mouseY > song3Button.y && 
		mouseX < song3Button.x + song3Button.w && 
		mouseY < song3Button.y + song3Button.h && 
		state == 1  && !music[0].isPlaying() && !music[1].isPlaying()) {

			if (!music[2].isPlaying()){
				music[2].play();
		    	music[2].setVolume(1);
			} else {
			  	music[2].stop(); 
			}	

	} else {
		return false;
  	}
}
/* ------------------------------
    	Key Press
------------------------------ */
function keyPressed () {
	// Go back to Main Screen
	if (keyCode == ESCAPE) {
		state = 0;
	}

	//Spacebar to change screen view
	if (keyCode == 32 && state == 1){
		 screen = !screen;
	}

	// Vertical movement
	if (keyCode == UP_ARROW && 
		navY <= height && navY > 0) {
		navY-=10;
	} else if (keyCode == DOWN_ARROW && 
		navY < height && navY >= 0) {
		navY+=10;
	} 

	// Horizontal movement
	if (keyCode == RIGHT_ARROW && 
		navX < width && navX >= 0) {
		navX+=10;
		timer = 0;
	} else if (keyCode == LEFT_ARROW && 
		navX <= width && navX > 0) {
		navX-=10;
		timer = 0;
	} 

	return false; // To prevent any default behaviour
}