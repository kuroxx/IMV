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
var amp;

var osc;
var env;
var playing = false;

function setup() {
  createCanvas(600, 600);
		
	amp = new p5.Amplitude();
	playOsc();

	createGalaxy();
	sounds[0].play();
	sounds[0].setVolume(0.5);
	// if (collide == true) {
	// 	sounds[0].play();
	// }

// console.log(rain);
 
button = createButton('play/pause');
button.mousePressed(toggle);

}

function playOsc () {
	// Oscillator object
	osc = new p5.Oscillator();
	osc.setType('sine');
	
	env = new p5.Env();
	// Attack, Decay, Sustain, Release
	env.setADSR(0.05, 0.2, 0.5, 0.1);
	// Attack, Release vol
	env.setRange(1, 0);
}

function toggle () {
// if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
		if(!playing) {
			osc.start();
			osc.amp(env);
			osc.freq(440); // Note A
			
			env.play();
			playing = true;				
		} else {
			// osc.stop();
			playing = false;
		}
	// }
}

function playMusic() {
    if (!sounds[0].isPlaying() && state == 1){
    	// if(collide == true) {
			sounds[0].play();
	    	sounds[0].setVolume(0.5);
	    	// button.html("Pause");
    	// }
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
	background(20);

	if (state == 0) {
	    startScreen();
	} else if (state == 1) {
	 	mainScreen();
	} else if (state == 2) {
		instructionScreen();
	}

}