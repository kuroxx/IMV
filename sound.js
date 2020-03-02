/* ------------------------------
    	Sound
------------------------------ */
var osc;
var env;
var playing = false;

function createEnv () {
	// Oscillator object
	osc = new p5.Oscillator();
	osc.setType('sine');
	env = new p5.Env();
	
	// Attack, Decay, Sustain, Release
	env.setADSR(0.05, 0.2, 0.5, 0.1);
	// Attack, Release vol
	env.setRange(1, 0);
}

function playNote () {
	osc.start();
	osc.amp(env);
	osc.freq(440); // Note A
	env.play();
}

function playSound1 () {
	if (!sounds[0].isPlaying()){
		sounds[0].play();
    	sounds[0].setVolume(1);
	} 
}

function playSound2() {
    if (!sounds[1].isPlaying()){
			sounds[1].play();
	    	sounds[1].setVolume(1);
	}
}
/* ------------------------------
    	Beats
------------------------------ */
var generatedBeat = [];

function createBeat () {

		for (var i = 0; i < 3; i++) {
			if (i == random(0, 2)) {
				break;
			}
			generatedBeat.push(beats[0]);
		}

	// if(timer == 3) {
	// 	generatedBeat.splice(random(0, generatedBeat.length),1);
	// }
}

function playBeat () {
	beats[0].setVolume(0.5);
	
	for (var i = generatedBeat.length - 1; i >= 0; i--) {
		generatedBeat[i].play();
	}
}