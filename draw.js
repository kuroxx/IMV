// function drawAmpl() {
// // Draw Amplitude of Sound
//   var level = amplitude.getLevel();
//   var size = map(level, 0, 1, 0, 500);
//   fill(255);
//   ellipse(width/2, height/2, size, size);
// }

/* ------------------------------
    	Rain
------------------------------ */
var rain = [];
var speed = 2;

function Rain(_x, _y) {
var gradient = color(255 * (1 - (log(speed) / log(100))));
	
	if(speed > 30) {
		speed = 0
	} else {
		speed += 0.1;
	}

	this._y += speed;

	this.x = _x;
	this.y = _y;

	this.display = function() {
		noStroke();
		fill(gradient);
		ellipse(this.x, this.y, 5, 5);
	};

	this.fall = function() {
		this.x = this.x + random(-1, 1);
		this.y = this.y + speed;
	}

}

function mouseDragged() {
	rain.push(new Rain(mouseX, mouseY));
}

function drawRain() {
//Draws rain (max 20)
	for (var i = 0; i < rain.length; i++) {
		rain[i].display();	
		rain[i].fall();
	}

	if (rain.length > 20) {
		rain.splice(0, 1);
	}
}

/* ------------------------------
    	Music Box
------------------------------ */
var musicBox1 = musicBox(100, 100);
// var musicBox2 = musicBox(300, 300, sounds[1]);

var collide = false;

function musicBox(_x, _y) {
	
this.hit = collide;

	var box = {
		x: _x,
	    y: _y,
	    w: 60,
	    h: 10,
	    colour: 'rgba(255,255,255, 0.75)',

	   	display: function() {
			noStroke();
			fill(this.colour);
			rect(this.x, this.y, this.w, this.h, 2);
			rect(this.x, this.y + 15, this.w, this.h, 2);
			rect(this.x, this.y + 30, this.w, this.h, 2);
	   	} 
	}

	var fillBox = {
		x: _x,
	    y: _y,
	    w: 60,
	    h: 10,
	    colour: 'rgba(0,0,255, 0.75)',

    	display: function() {
		noStroke();
		fill(this.colour);
		rect(this.x, this.y, this.w, this.h, 2);
		rect(this.x, this.y + 15, this.w, this.h, 2);
		rect(this.x, this.y + 30, this.w, this.h, 2);
	   	},

	   	// playMusic: function() {
	   	// 	this.music.play();
	   	// 	this.music.setVolume(0.5);
	   	// }
	}

// Fill box colour
	if (hit == true) {
		return fillBox;
	} else {
	 	return box;		
	}
}

function drawMusicBox () {
	// body...
	// musicBox1.display();
  	// musicBox2.display();
}

/* ------------------------------
    	Amplitude
------------------------------ */
var volHistory = [];

function drawAmp() {
 push();
	  var vol = amp.getLevel();
	  volHistory.push(vol);

	  stroke(255);
	  noFill();

	// Shift graph down
	  translate(0, height / 2);

	// Graphs amplitude (left to right)
	  beginShape();
		  for(var i = 0; i < volHistory.length; i++) {
		  	// Draws point depending on volume level
		  	// At 1, draws point at the top
		  		//map(value, start1, stop1, start2, stop2)
		  	var y = map(volHistory[i], 0, 1, height/3, 0);
		  	vertex(i, y);
		  }
	  endShape();
 pop();

  if (volHistory.length > width - 20) {
  	volHistory.splice(0, 1);
  }

}