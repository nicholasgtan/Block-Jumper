// import "./style.css";
// import $ from "jquery";

// $(() => {
let canvasWidth = 600;
let canvasHeight = 400;

let playerYPosition = 200;

let fallSpeed = 0;

let isJumping = false;
let gameRun = false;
let jumpSpeed = 0;

const startGame = () => {
  gameCanvas.start();
  player.draw();
  block.draw();
  scoreTag.draw();
};
// Data
// 1. game screen and render
const gameCanvas = {
  canvas: $("<canvas>"),
  start: () => {
    gameCanvas.canvas[0].width = canvasWidth;
    gameCanvas.canvas[0].height = canvasHeight;
    gameCanvas.context = gameCanvas.canvas.get(0).getContext("2d");
    gameCanvas.canvas.insertAfter($("h1"));
  },
  stop: () => {
    isJumping = false;
    gameRun = false;
    gameOver.color = "#fe019a";
    tryAgain.color = "#fe019a";
  },
};

// 2. player on game screen
const player = {
  color: "#7913fe",
  width: 30,
  height: 30,
  x: 10,
  y: playerYPosition,
  // draw player on canvas
  draw: () => {
    let ctx = gameCanvas.context;
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
  },
  // player gravity
  makeFall: () => {
    if (isJumping === false) {
      player.y += fallSpeed;
      fallSpeed += 0.1;
      player.stopPlayer();
    }
  },
  // making player stop on 'ground' - default state
  stopPlayer: () => {
    let ground = canvasHeight - player.height;
    if (player.y > ground) {
      player.y = ground;
    }
  },
  // jumping function
  jump: () => {
    if (isJumping === true) {
      player.y -= jumpSpeed;
      jumpSpeed += 0.3;
      gameRun = true; //boolean to allow game to continue when player first jumps
    }
  },
};
// 3. obstacle blocks with location moving toward player
// random numbers function between min and max to control obstacle size randomness
//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const block = {
  color: "#cfff04",
  width: randomNum(10, 50),
  height: randomNum(15, 200),
  x: canvasWidth,
  speed: 0,

  draw: () => {
    block.y = canvasHeight - block.height;
    let ctx = gameCanvas.context;
    ctx.fillStyle = block.color;
    ctx.fillRect(block.x, block.y, block.width, block.height);
  },
  // function for obstacle to move towards player.
  attack: () => {
    if (gameRun === true) {
      block.x = canvasWidth - block.speed;
      block.speed += 4; // can try varying speed later?
      block.returnToStart();
    }
  },
  // 4. obstacle reaching end
  // function to reset obstacle when it reaches end.
  returnToStart: () => {
    if (block.x < 0) {
      block.width = randomNum(10, 50);
      block.height = randomNum(15, 200);
      block.x = canvasWidth;
      block.speed = randomNum(4, 6);
      console.log(block.speed);
      scoreTag.score++;
    }
  },
};

const resetJump = () => {
  isJumping = false;
  jumpSpeed = 0;
};

// 5. collision between player and obstacle
const detectCollision = () => {
  // player hits obstacle from the side
  let playerRight = player.x + player.width;
  let blockLeft = block.x;
  // player hits obstacle from top
  let playerBot = player.y + player.height;
  let blockTop = block.y;
  if (playerRight > blockLeft && playerBot > blockTop) {
    gameCanvas.stop();
  }
};

// 6. Score
const scoreTag = {
  score: 0,
  x: 465,
  y: 30,
  color: "white",
  draw: () => {
    let ctx = gameCanvas.context;
    ctx.font = "12px 'Press Start 2P'";
    ctx.fillStyle = scoreTag.color;
    ctx.fillText(scoreTag.text, scoreTag.x, scoreTag.y);
  },
};

const gameOver = {
  x: 100,
  y: 150,
  color: "black",
  draw: () => {
    let ctx = gameCanvas.context;
    ctx.font = "45px 'Press Start 2P'";
    ctx.fillStyle = gameOver.color;
    ctx.fillText("GAME OVER", gameOver.x, gameOver.y);
  },
};

const tryAgain = {
  x: 143,
  y: 185,
  color: "black",
  draw: () => {
    let ctx = gameCanvas.context;
    ctx.font = "18px 'Press Start 2P'";
    ctx.fillStyle = tryAgain.color;
    ctx.fillText("Jump to try again!", tryAgain.x, tryAgain.y);
  },
};

//render function
const updateCanvas = () => {
  detectCollision();
  let ctx = gameCanvas.context;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  player.makeFall();
  player.draw();
  player.jump();
  block.draw();
  block.attack();
  scoreTag.text = "SCORE: " + scoreTag.score;
  scoreTag.draw();
  gameOver.draw();
  tryAgain.draw();
};

setInterval(updateCanvas, 20);

//Jquery hotkeys
//https://github.com/tzuryby/jquery.hotkeys/blob/master/jquery.hotkeys.js

const spaceButton = $(document).on("keydown", function (e) {
  if (e.keyCode === 32 && gameOver.color === "black") {
    isJumping = true;
    setTimeout(resetJump, 950);
  } else if (e.keyCode === 32) {
    location.reload();
  }
});

const mouseClick = $(document).on("click", function () {
  if (gameOver.color === "black") {
    isJumping = true;
    setTimeout(resetJump, 950);
  } else {
    location.reload();
  }
});

startGame();
// });
// Resources: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
