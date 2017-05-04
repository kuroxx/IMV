/* ------------------------------
    To Preload
------------------------------ */
var music;
var beats;
var sounds;
var imgs = [];

function loadAllSound(){
	var musicNames = ['orchestra_piano.wav'];
	// var soundNames = ['shigatsu.mp3', 'bradovic_piano.wav', 'orchestra_piano.wav', 'symphony_sounds.wav'];
	var soundNames = ['single-vio.wav', 'single-vio-2.wav'];

	var beatNames = ['hat.wav'];

	music = musicNames.map(function(name) {
		return loadSound('assets/music/' + name);
	});

	sounds = soundNames.map(function(name) {
		return loadSound('assets/sounds/' + name);
	});

	beats = beatNames.map(function(name2) {
		return loadSound('assets/beats/' + name2);
	});
}

function loadAllImg () {
	var imgNames = ['note.png', 'ufo.png'];
	for (var i = 0; i < imgNames.length; i++) {
		imgs.push(loadImage("assets/img/" + imgNames[i]));
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