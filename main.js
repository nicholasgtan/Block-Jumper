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
    color: "#663399",
    width: 30,
    height: 30,
    x: 10,
    y: playerYPosition,

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
  };

  setInterval(updateCanvas, 20);
  // 3. obstacle blocks with location moving toward player

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
