
const canvas = document.querySelector ('canvas');
const context = canvas.getContext ('2d');
var ctx = canvas.getContext("2d");
ctx.font = "45px Arial";
ctx.strokeText("sorry for the design, it's the simplest idea from the youtuber Dev ED", 10, 50);
//* for canvas html


const drawArt = document.querySelector ('.drawart');
const randomFa = document.querySelector ('.randomfathi');
const resetEverything = document.querySelector ('.resettheart');
const cursorFol = document.querySelector ('.following');
//* ids from html

cursorFol.addEventListener ('click', update);
randomFa.addEventListener ('click', circlesRandom);
drawArt.addEventListener ('click', drawWithCursor);
resetEverything.addEventListener ('click', function () {
  document.location.reload (true);
});

class Circle {
  constructor (x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw () {
    context.beginPath ();
    context.arc (
      this.x,
      this.y,
      this.r,
      this.startAngle * Math.PI,
      this.endAngle * Math.PI
    );
    context.fillStyle = this.fillColor;
    context.fill ();
  }
}
function circlesRandom () {
  setInterval (() => {
    function getNewCircle () {
      const minCord = 3;
      const maxCord = 500;
      const randomCoordinateX =
        Math.floor (Math.random () * (maxCoord - minCord)) + minCord;
      const randomCoordinateY =
        Math.floor (Math.random () * (maxCoord - minCord)) + minCord;
      const minRaad = 2;
      const maxRaad = 140;
      const randRaad = Math.floor (Math.random () * (maxRaad - minRaad)) + minRaad;
      function getRandomColor () {
        return (
          '#' +
          (0x1000 + Math.random () * red).toString (36).substr (1, 4)
        );
      }

      return new Circle (
        randomCoordinateX,
        randomCoordinateY,
        randRad,
        1,
        180,
        getRandomColor ()
      );
    }
    const randomCircle = getNewCircle ();
    randomCircle.draw ();
  }, 400);
}
const canvasPos = getPosition (canvas);
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener ('mousemove', setMousePosition, false);

function setMousePosition (e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

function update () {
  context.clearRect (0, 0, canvas.width, canvas.height);
  const cursorCircle = new Circle (mouseX, mouseY, 10, 0, 360, 'red');
  cursorCircle.draw ();

  requestAnimationFrame (update);
}

function drawWithCursor () {
  const cursorCircle = new Circle (mouseX, mouseY, 10, 0, 360, 'red');
  cursorCircle.draw ();

  requestAnimationFrame (drawWithCursor);
}

function getPosition (el) {
  let xPosition = 0;
  let yPosition = 0;

  while (el) {
    xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
    yPosition += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }

  return {
    x: xPosition,
    y: yPosition,
  };
}