const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

// char positions
let x = 240;
let y = 530;

// ball positions
let x1 = Math.random() * 490;
let y1 = 20;

// game details
var speed = 8; // character speed
let score = 0;
let ballSpeed = 5 + score;
let ballsize = 20;
let highScore = 0;

let leftPressed = false;
let rightPressed = false;

// game Loop
function drawGame() {
  requestAnimationFrame(drawGame);
  ballReset();
  drawBackground();
  inputs();
  boundaryCheck();
  drawCharacter();
  drawBall();
  y1 = y1 + ballSpeed;
  drawScore();
  collisionCheck();
  gameOver();
}

function boundaryCheck() {
  if (x < 5) {
    x = 5;
  }
  if (x > 476) {
    x = 476;
  }
}
  
function inputs() {
  if (leftPressed === true) {
    x = x - speed;
  }
  if (rightPressed === true) {
    x = x + speed;
  }
}

function drawScore() {
  ctx.font = "24px Monospace";
  ctx.fillStyle = "White";
  ctx.fillText("Level: " + score + "[" + ballSpeed + "]", 325, 50);
  ctx.fillText("High Score: " + highScore, 311, 80);
  if (score > highScore) {
    highScore = score
  }
}

function gameOver() {
  if (y1 > 550) {
  ctx.font = "64px Monospace";
  ctx.fillStyle = "Red";
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.strokeText("Game Over", 95, 300);
  ctx.strokeText("Your Score:" + score, 41, 365);
  ctx.fillText("Game Over", 95, 300)
  ctx.fillText("Your Score:" + score, 41, 365);
  ctx.font = "28px Monospace";
  ctx.strokeText("Press [Space] to Reset", 85, 410);
  ctx.fillText("Press [Space] to Reset", 85, 410);
  }
}

function drawCharacter() {
  // leg 1
  ctx.beginPath();
  ctx.fillStyle = "Pink"
  ctx.rect(x, y+30, 8, 15);
  ctx.fill();
  
  // leg 2
  ctx.beginPath();
  ctx.rect(x+12, y+30, 8, 15);
  ctx.fill();

  // head
  ctx.beginPath();
  ctx.rect(x-4, y-28, 28, 28);
  ctx.fill();

  // arm 1
  ctx.beginPath();
  ctx.rect(x + 20, y, 7, 20);
  ctx.fill();

  // arm 2
  ctx.beginPath();
  ctx.rect(x - 7, y, 7, 20);
  ctx.fill();
  
  // body
  ctx.fillStyle = "Blue"
  ctx.beginPath();
  ctx.rect(x, y, 20, 30);
  ctx.fill();
  
  // eye 1
  ctx.fillStyle = "Black"
  ctx.beginPath();
  ctx.arc(x+4, y-16, 3, 0, Math.PI*2);
  ctx.fill();

  // eye 2
  ctx.beginPath();
  ctx.arc(x+16, y-16, 3, 0, Math.PI*2);
  ctx.fill();
}

function drawBackground() {
  ctx.fillStyle= "green"
  ctx.fillRect(0,0,canvas.width, canvas.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.fillStyle = "White";
  ctx.arc(x1, y1, ballsize, 0, Math.PI*2);
  ctx.fill();
}

function keyDown(event) {
  // right
  if (event.keyCode == 68)
    rightPressed = true;
  
  // left
  if (event.keyCode == 65)
    leftPressed = true;
  if (event.keyCode == 32){
    gameReset();
  }
}

function keyUp(event) {
  // right
  if (event.keyCode == 68) {
    rightPressed = false;
  }
  // left
  if (event.keyCode == 65) {
    leftPressed = false;
  }
}

function collisionCheck() {
if ((y1 === (y - 40)) && (x1 > (x - 4)) && (x1 < (x + 24))) {
  ballSpeed = -(ballSpeed);
  score = score + 1;
  }
}

function ballReset() {
if (y1 < 10) {
  ballSpeed = Math.abs(ballSpeed);
  x1 = Math.random() * 490;
  }
}

function gameReset() {
  x1 = Math.random() * 490;
  y1 = 20;
  speed = 8; // character speed
  score = 0;
  ballSpeed = 5 + score;
  ballsize = 20;
  leftPressed = false;
  rightPressed = false;
  x = 240
  y = 530
}

// event listeners
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

drawGame();
