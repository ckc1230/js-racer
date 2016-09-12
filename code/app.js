
// Declaring basic variables
var finishLine = 1005;        // Finish Line
var vaderCheck = 390;         // When to trigger Vader
var tieFlyCheck = 195;        // When to trigger Tie Fly
var tieFireCheck = 960;       // When to trigger Tie Fire
var xwingFireCheck = 960;     // When to trigger Xwing Fire
var obiCheck = 660;           // When to trigger Obi Wan
var gameOn = false;           // Only allow game to run when 'true'

// Define Racer 1 and its starting point
racer1 = document.getElementById('racer1');
distanceMove1 = 0;

// Define Racer 2 and its starting point
racer2 = document.getElementById('racer2');
distanceMove2 = 0;

// Variable for the message on top
gameEnd = document.getElementById('topMessage');

// MUS variables
var raceMusic = new Audio('music/raceMusic.mp3');
var loadMusic = document.getElementById("my_audio");
var goodWin = new Audio('music/goodWin.mp3');
var badWin = new Audio('music/badWin.mp3');

// SFX variables
var vaderSfx = new Audio('music/vader.mp3');
var obiSfx = new Audio('music/obi.mp3');
var vaderNo = new Audio('music/no.mp3');
var tieFly = new Audio('music/tieFly.mp3');
var lukeStart = new Audio('music/lukeStart.mp3');
var lukeNo = new Audio('music/lukeNo.mp3');
var tieFire = new Audio('music/tieFire.mp3');
var xwingFire = new Audio('music/xwingFire.mp3');

// Run when the game begin button is pressed
function startGame() {
  loadMusic.pause();
  raceMusic.play();
  lukeStart.play();
  gameOn = true;
}

// Load music on webpage
window.onload = function() {
    loadMusic.play();
}

// Player 1 Right
function moveRight1() {
    distanceMove1 +=15;
    racer1.style.marginLeft = distanceMove1 + "px";
  }

// Player 2 Right
function moveRight2() {
    distanceMove2 +=15;
    racer2.style.marginLeft = distanceMove2 + "px";
  }

// Player 1 Left
function moveLeft1() {
  if (distanceMove1 === 0) {
    return;
  }
  else {
    distanceMove1 -=10;
    racer1.style.marginLeft = distanceMove1 + "px";
  }
}

// Player 2 Left
function moveLeft2() {
  if (distanceMove2 === 0) {
    return;
  } 
  else {
    distanceMove2 -=10;
    racer2.style.marginLeft = distanceMove2 + "px";
  }
}

// Wait for certain keys to press
addEventListener("keyup", moveSomething, false);

function moveSomething(e) {

  if (gameOn === true)
    switch(e.keyCode) {
        case 74:
            moveLeft1();
            break;
        case 76:
             moveRight1();
             checkSound();
             checkWin();
            break;
        case 68:
            moveRight2();
            checkSound();
            checkWin();
            break;
        case 65:
            moveLeft2();// down key pressed
            break;  
    }   
}

function checkSound() {
  if (distanceMove1 === tieFlyCheck) {
      tieFly.play();
  }
  if (distanceMove2 === vaderCheck) {
    vaderSfx.play();
  }
  if (distanceMove1 === obiCheck) {
      obiSfx.play();
  }
  if (distanceMove2 === tieFireCheck) {
    tieFire.play();
  }
  if (distanceMove1 === xwingFireCheck) {
    xwingFire.play();
  }
}

function checkWin() {
    if (distanceMove1 === finishLine) {
      raceMusic.pause();
      gameOn = false;
      goodWin.play();
      vaderNo.play();
      gameEnd.innerHTML = 'Light Side Wins! Refresh the page to play again.';
      gameEnd.style.textShadow = '0 0 10px lightblue';
      gameEnd.style.fontSize = '30px';
    } else if (distanceMove2 === finishLine) {
      raceMusic.pause();
      gameOn = false;
      badWin.play();
      lukeNo.play();
      gameEnd.innerHTML = 'Dark Side Wins! Refresh the page to play again.';
      gameEnd.style.fontSize = '30px';
    }
}