/* ------------------------------
    	Rain
------------------------------ */
var rain = [];
var speed = 0.5;

function Rain(_x, _y) {
var gradient = color(255 * (1 - (log(speed) / log(100))));
	
	this.x = _x;
	this.y = _y;
	this.r = 3;
	this._y += speed;

	if(speed > 30) {
		speed = 0
	} else {
		speed += 0.1;
	}

	this.display = function() {
		noStroke();
		fill(gradient);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	};

	this.fall = function() {
		this.y = this.y + random(0, 5);
	}
}

function mouseDragged() {
	rain.push(new Rain(mouseX, mouseY));
}

function drawRain() {
	for (var i = 0; i < rain.length; i++) {
		rain[i].display();	
		rain[i].fall();
	}

	if (rain.length > 30) {
		rain.splice(0, 1);
	}
}
/* ------------------------------
    	Music Box
------------------------------ */
var musicBox1 = new MusicBox(100, 100);
var musicBox2 = new MusicBox(400, 400);

function MusicBox(_x, _y) {
 var col = 255;
 // var col = color(255, 255, 255, 0.75);
	
	this.x = _x;
	this.y = _y;
	this.w = 30;
	this.h = 30;
	
	this.intersects = function (other) {
		var d = dist(this.x, this.y, other.x, other.y);
		
		if (d < this.w + other.r){
			return true;	
		} else {
			return false;	
		}
	};

	this.displayBox = function () {
		noStroke();
		fill(col);
		rect(this.x, this.y, this.w, this.h, 2);
	}
}

function drawMusicBox () {
	musicBox1.displayBox();
	musicBox2.displayBox();

	for (var i = 0; i < rain.length; i++) {
		if(musicBox1.intersects(rain[i])){
			playSound();
			break;
		}
	}

	for (var i = 0; i < rain.length; i++) {
		if(musicBox2.intersects(rain[i])){
			if (!sounds[0].isPlaying() && state == 1){
				sounds[0].play();
		    	sounds[0].setVolume(0.5);
			} else {
			  	sounds[0].pause(); 
			}
		
			break;
		}
	}
}
/* ------------------------------
    	Screen 1
------------------------------ */
var ampLevel = [];

function drawAmp() {
 push();
	  var level = amp.getLevel();
	  ampLevel.push(level);

	  stroke(255);
	  noFill();

	// Shift graph down
	  translate(0, height / 2);

	// Graphs amplitude (left to right)
	  beginShape();
		  for(var i = 0; i < ampLevel.length; i++) {
		  	// Draws point depending on volume level
		  	// At 1, draws point at the top
		  	// map(value, start1, stop1, start2, stop2)
		  	var y = map(ampLevel[i], 0, 1, height/3, 0);
		  	vertex(i, y);
		  }
	  endShape();
 pop();

  if (ampLevel.length > width - 20) {
  	ampLevel.splice(0, 1);
  }
}

// function drawAmpl() {
// // Draw Amplitude of Sound
//   var level = amplitude.getLevel();
//   var size = map(level, 0, 1, 0, 500);
//   fill(255);
//   ellipse(width/2, height/2, size, size);
// }
/* ------------------------------
    	Screen 2
------------------------------ */
var galaxy = [];

function createGalaxy () {
var col = 5;
var row = 5;
	// console.log(galaxy);

	for (var h = 0; h < col; h++) {
			galaxy[h] = [];	

		for (var v = 0; v < row; v++) {
			galaxy[h][v] = new Star(random(0, width), random(0, height));
		}
	}

	return galaxy;
}

function drawGalaxy () {
	var level = amp.getLevel();
	ampSize = map(level, 0, 1, 0, 200);
		console.log(ampSize);

	for (var h = 0; h < galaxy.length; h++) {
		for (var v = 0; v < galaxy.length; v++) {
			galaxy[h][v].draw(ampSize);
			galaxy[h][v].update();

			// SOMTHING
			// if (galaxy[h][v].SOMETHING < 0) {
			// 	galaxy[h][v].splice(v, 1)
			// }
		}
	}

	// Random splice(index, how many)
	// galaxy.splice(random(0, galaxy.length), 1);
}

// Constructor function
function Star (_x, _y) {
	this.x = _x;
	this.y = _y;
	this.size = 10;

	this.update = function() {
		this.x += random(-1, 1);
		this.y += random(-1, 1);			
	}

	this.draw = function() {
		noStroke();

		fill(255, 150);
		ellipse(this.x, this.y, this.size, this.size);
	}
}
/* ------------------------------
    	Navigator
------------------------------ */
var navY = 300;
var navX = 300;
var timer = 0;

function navigator () {
	this.x = navX;
	this.y = navY;
	
	fill(255);

	if(this.x > width/2){
		while (timer < 2) {
			playBeat();
			timer++;
		}

		// Ufo img	
		image(imgs[1], this.x - imgs[1].width/4, this.y - imgs[1].height/4, 100, 100);
	} else {
		// Music note img
		image(imgs[0], this.x - imgs[0].width/4, this.y - imgs[0].height/4, 100, 100);
	}
}