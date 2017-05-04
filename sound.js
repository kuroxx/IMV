/* ------------------------------
    	Sound
------------------------------ */
var osc;
var env;
var playing = false;

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
}

function playSound() {
    if (!sounds[1].isPlaying() && state == 1){
			sounds[1].play();
	    	sounds[1].setVolume(1.5);
	} else {
	  	sounds[1].pause(); 
	}
}
/* ------------------------------
    	Beats
------------------------------ */
var generatedBeat = [];

function makeBeat () {
	for (var i = 0; i < 3; i++) {
		if (i == random(0, 2)) {
			break;
		}
		generatedBeat.push(beats[0]);
	}

	if(timer == 0){
		generatedBeat.splice(0,1);
	}
}

function playBeat () {
	beats[0].setVolume(0.5);
	
	for (var i = generatedBeat.length - 1; i >= 0; i--) {

		generatedBeat[i].play();
	}

console.log(generatedBeat);
}