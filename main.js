import "./style.css";
import $ from "jquery";

$(() => {
  let canvasWidth = 600;
  let canvasHeight = 400;

  let player = {};
  let playerYPosition = 200;

  const startGame = () => {
    gameCanvas.start();
    player = new createPlayer();
    console.log(player);
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
  function createPlayer() {
    player.width = 30;
    player.height = 30;
    player.x = 10;
    player.y = playerYPosition;
    let ctx = gameCanvas.context;
    ctx.fillStyle = "#663399";
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  // 3. obstacle blocks with location moving toward player
  // 4. obstacle reaching end
  // 5. collision between player and obstacle

  startGame();
});
