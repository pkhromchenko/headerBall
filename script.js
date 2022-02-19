const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 240;
let y = 530;
var speed = 5;

let leftPressed = false;
let rightPressed = false;

// game Loop
function drawGame() {
  requestAnimationFrame(drawGame);
  drawBackground();
  inputs();
  boundaryCheck();
  drawCharacter();
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
  ctx.fillStyle = "Orange"
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

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
  // right
  if (event.keyCode == 68)
    rightPressed = true;
  
  // left
  if (event.keyCode == 65)
    leftPressed = true;
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

drawGame();
