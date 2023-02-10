const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgray";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = true;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [  { x: unitSize * 4, y: 0 },  { x: unitSize * 3, y: 0 },  { x: unitSize * 2, y: 0 },  { x: unitSize, y: 0 },  { x: 0, y: 0 }];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
createFood();

function gameStart() {
  setInterval(nextTick, 100);
}

function nextTick() {
  clearBoard();
  movesnake();
  drawFood();
  drawSnake();
  checkCollision();
}

function clearBoard() {
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
  function randomFood(min, max) {
    const randNum =
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  }

  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameHeight - unitSize);
}

function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function movesnake() {
  const headX = snake[0].x + xVelocity;
  const headY = snake[0].y + yVelocity;
  snake.unshift({ x: headX, y: headY });

  if (headX === foodX && headY === foodY) {
    score += 1;
    scoreText.textContent = `Score: ${score}`;
    createFood();
  } else {
    snake.pop();
  }
}

function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
}

  const keyPressed = event.keyCode;

  if (keyPressed === LEFT_KEY && xVelocity === 0) {
    xVelocity = -unitSize;
    yVelocity = 0;
  } else if (keyPressed === RIGHT_KEY && xVelocity === 0) {
    xVelocity = unitSize;
    yVelocity = 0;
    } else if (keyPressed === UP_KEY && yVelocity === 0) {
    xVelocity = 0;
    yVelocity = -unitSize;
  } else if (keyPressed === DOWN_KEY && yVelocity === 0){
    
  }
