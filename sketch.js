/* ------------------------------
    To Preload
------------------------------ */
var sounds;

function loadAllSound(){
	var soundNames = ['shigatsu.mp3'];

	sounds = soundNames.map(function(name) {
		return loadSound('assets/' + name);
	});
}

function preload() {
	loadAllSound();
}

/* ------------------------------
    	Setup
------------------------------ */
var rain = [];
var amp;
var volHistory = [];

function setup() {
  createCanvas(600, 600);

  amp = new p5.Amplitude();

	// for (var i = 0; i < 100; i++) {
	// 	rain[i] = new Rain();
	// }

	// if (collide == true) {
	// 	sounds[0].play();
	// }
// console.log(rain);
}

function togglePlaying() {
    if (!sounds[0].isPlaying()){
    	if(collide == true) {
			sounds[0].play();
	    	sounds[0].setVolume(0.5);
	    	// button.html("Pause");
    	}
	} else {
	  	sounds[0].pause(); 
	  	// button.html("Play");
	}
}

/* ------------------------------
    	Draw
------------------------------ */
var state = 0;

function draw() {
	if (state == 0) {
	    startScreen();
	} else if (state == 1) {
	 	mainScreen();
	}
}