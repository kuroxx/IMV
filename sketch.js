/* ------------------------------
    To Preload
------------------------------ */
var sounds;
var beats;
var imgs = [];

function loadAllSound(){
	var soundNames = ['shigatsu.mp3', 'bradovic_piano.wav', 'orchestra_piano.wav', 'symphony_sounds.wav'];

	var beatNames = ['hat.wav', 'water-beat.wav'];

	sounds = soundNames.map(function(name) {
		return loadSound('assets/' + name);
	});

	beats = beatNames.map(function(name2) {
		return loadSound('assets/' + name2);
	});
}

function loadAllImg () {
	var imgNames = ['note.png', 'ufo.png'];
	for (var i = 0; i < imgNames.length; i++) {
		imgs.push(loadImage("assets/" + imgNames[i]));
	}
}

function preload() {
	loadAllSound();
	loadAllImg();
}

/* ------------------------------
    	Setup
------------------------------ */
var amp;

function setup() {
  createCanvas(600, 600);
		
	amp = new p5.Amplitude();
	playOsc();

	createGalaxy();
	makeBeat();
	
	// sounds[0].play();
	// sounds[0].setVolume(0.5);

	// if (collide == true) {
	// 	sounds[0].play();
	// }

// console.log(rain);
 
button = createButton('Add');
button.mousePressed(toggle);
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