import "./style.css";
import $ from "jquery";

$(() => {
  let canvasWidth = 600;
  let canvasHeight = 400;

  let playerYPosition = 200;

  let fallSpeed = 0;

  let isJumping = false;
  let jumpSpeed = 0;

  const startGame = () => {
    gameCanvas.start();
    player.draw();
    block.draw();
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
  };

  // 2. player on game screen
  const player = {
    color: "#bc13fe",
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
    x: 500, //TODO need to change to canvasWidth so obstacle starts outside of screen

    draw: () => {
      block.y = canvasHeight - block.height;
      let ctx = gameCanvas.context;
      ctx.fillStyle = block.color;
      ctx.fillRect(block.x, block.y, block.width, block.height);
    },
  };

  const resetJump = () => {
    isJumping = false;
    jumpSpeed = 0;
  };

  //render function
  const updateCanvas = () => {
    let ctx = gameCanvas.context;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    player.makeFall();
    player.draw();
    player.jump();
    block.draw();
  };

  setInterval(updateCanvas, 20);

  // 4. obstacle reaching end
  // 5. collision between player and obstacle

  //Jquery hotkeys
  //https://github.com/tzuryby/jquery.hotkeys/blob/master/jquery.hotkeys.js

  const spaceButton = $(document).on("keydown", function (e) {
    if (e.keyCode === 32) {
      isJumping = true;
      setTimeout(resetJump, 999);
    }
  });

  startGame();
});
