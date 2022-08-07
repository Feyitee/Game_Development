const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // This will give access to different types of drawing tools.
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "images/dog.png";s
console.log(playerImage);

//let x = 0;
function animate() {
  ctx.clearRect(0, 0, CANVAS_HEIGHT, CANVAS_WIDTH);
  ctx.drawImage(playerImage, 0, 0);
  // It accepts 9arguments.
  //1.Image you want to draw
  //2&3. X and Y coordinates
  //4.

  3;
  // ctx.fillRect(x, 50, 100, 100);
  // x++;
  requestAnimationFrame(animate);
  // It will call the parent function.
}
animate();
