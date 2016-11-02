
// Starts the full animation at 60 frames per second.
init(50);

// Calculates New Position For Ball
function normalize(v) {
    var length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {x: v.x / length, y: v.y / length};
}

// Variable Declaration
var canvas, currentAnimation, context; // Target is where the bubbles will move.
var leftPosition = {x: 235, y: 20}; // Position is the location where the bubbles start.
var middlePosition = {x: 235, y: 20}; // Position is the location where the bubbles start.
var rightPosition = {x: 235, y: 20}; // Position is the location where the bubbles start.

leftTarget = {x: 230, y: 0};
middleTarget = {x: 235, y: 0};
rightTarget = {x: 240, y: 0};
var leftStep = normalize({x: leftTarget.x - leftPosition.x, y: leftTarget.y - leftPosition.y}); // Caclulates the length until target.
var middleStep = normalize({x: middleTarget.x - middlePosition.x, y: middleTarget.y - middlePosition.y}); // Caclulates the length until target.
var rightStep = normalize({x: rightTarget.x - rightPosition.x, y: rightTarget.y - rightPosition.y}); // Caclulates the length until target.

// Creates canvas and context, also starts the smoke animation.
function init(speed) {
   canvas = document.getElementById('houseCanvas');
   if(canvas.getContext)
      context = canvas.getContext('2d');
   else return;

   clearInterval(currentAnimation); // Stops the current smoke animation
   currentAnimation = setInterval(buildHouse, 1000 / speed); // Starts the new animation using the speed from the range
}

// Smoke Function
function buildHouse() {

  // Check if the animation is position is off screen, if so restart the animation.
  if(leftPosition.y < -100) {
    leftPosition.y = 20;
    leftPosition.x = 235;

    middlePosition.y = 20;
    middlePosition.x = 235;

    rightPosition.y = 20;
    rightPosition.x = 235;
  } else {
    clear();
    smoke();
    building();
    chimney();
    roof();
    door();
    windows();
  }

  leftPosition.x += leftStep.x;
  leftPosition.y += leftStep.y;

  middlePosition.x += middleStep.x;
  middlePosition.y += middleStep.y;

  rightPosition.x += rightStep.x;
  rightPosition.y += rightStep.y;
}

function smoke() {

  context.save();

  // Smoke Chunk #1
  context.beginPath();
  context.shadowColor='#222222';
  context.shadowBlur = 30;
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc(leftPosition.x, leftPosition.y, (Math.floor(Math.random() * (23 - 21 + 1)) + 21), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #1 Repeat
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc(leftPosition.x + 30, leftPosition.y + 120, (Math.floor(Math.random() * (23 - 21 + 1)) + 21), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #2
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc(leftPosition.x - 20, leftPosition.y - 10, (Math.floor(Math.random() * (23 - 21 + 1)) + 21), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #2 Repeat
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc((leftPosition.x - 20) + 30, (leftPosition.y - 10) + 120, (Math.floor(Math.random() * (23 - 21 + 1)) + 21), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #3
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc(rightPosition.x + 20, rightPosition.y + 50, (Math.floor(Math.random() * (23 - 21 + 1)) + 21), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #3 Repeat
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc((rightPosition.x - 20) + 10, (rightPosition.y + 10) + 165, (Math.floor(Math.random() * (23 - 21 + 1)) + 21), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #4
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc(middlePosition.x + 22, middlePosition.y + 30, (Math.floor(Math.random() * (30 - 28 + 1)) + 25), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  // Smoke Chunk #4
  context.beginPath();
  context.fillStyle = "rgba(190, 193, 183, 0.15)";
  context.arc(middlePosition.x + 22, (middlePosition.y) + 150, (Math.floor(Math.random() * (30 - 28 + 1)) + 25), 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  context.restore();
}

function building() {
  // Grass Under Building
  context.save();
  context.beginPath();
  context.fillStyle = "#8CD790";
  context.translate(20, 215);
  context.scale(240, 120);
  context.arc(1, 1, 1, 0, 2 * Math.PI, false);
  context.fill();
  context.restore();
  context.closePath();

  // Left Panel 1 Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rotate(20*Math.PI/180);
  context.rect(185,155,235,120);
  context.fill();
  context.restore();
  context.closePath();

  // Back Building Panel
  context.beginPath();
  context.save();
  context.fillStyle = "#ddcdc9";
  context.rotate(54.3*Math.PI/180);
  context.rect(340,-190,118,111);
  context.fill();
  context.restore();
  context.closePath();

  // Back Building Panel
  context.beginPath();
  context.save();
  context.rotate(74.5 * Math.PI/180);
  context.fillStyle = "#ddcdc9";
  context.rect(360,-332,108,150);
  context.fill();
  context.restore();
  context.closePath();

  // Left Panel 1 Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rotate(3.5*Math.PI/180);
  context.rect(280,254,45,130);
  context.fill();
  context.restore();
  context.closePath();

  // Left Panel 1 Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#8CD790";
  context.rotate(20*Math.PI/180);
  context.rect(350,275,85,20);
  context.fill();
  context.restore();
  context.closePath();

  // Front Left Building Panel Corner
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rect(80,200,230,120);
  context.fill();
  context.restore();
  context.closePath();

  // Building Fix
  context.beginPath();
  context.save();
  context.fillStyle = "#ddcdc9";
  context.rotate(2.6*Math.PI/180);
  context.rect(320,254,45,100);
  context.fill();
  context.restore();
  context.closePath();

  // Back Building Panel White Cover Fix
  context.beginPath();
  context.save();
  context.fillStyle = "#8CD790";
  context.rect(415,260,30,116);
  context.fill();
  context.restore();
  context.closePath();
}

function chimney() {
  // Chimney Back Dark Side
  context.beginPath();
  context.save();
  context.fillStyle = "#8e726c";
  context.rect(235,100,45,60);
  context.fill();
  context.restore();
  context.closePath();

  // Chimney Front Bright Side
  context.beginPath();
  context.save();
  context.fillStyle = "#a38a83";
  context.rect(220,100,45,60);
  context.fill();
  context.restore();
  context.closePath();
}

function door() {
  // Door
  context.beginPath();
  context.save();
  context.fillStyle = "#837b6e";
  context.rect(340,295,44,100);
  context.fill();
  context.restore();
  context.closePath();

  // Top Door Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#ddcdc9";
  context.rotate(-16*Math.PI/180);
  context.rect(220,365,75,30);
  context.fill();
  context.restore();
  context.closePath();

  // Bottom Door Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#8CD790";
  context.rotate(-16*Math.PI/180);
  context.rect(200,470,80,20);
  context.fill();
  context.restore();
  context.closePath();

  // Door Knob
  context.beginPath();
  context.save();
  context.fillStyle = "#545045";
  context.arc(374,345, 4, 0, Math.PI * 2, true);
  context.fill();
  context.restore();
  context.closePath();
}

function roof() {
  // Right Roof Line
  context.beginPath();
  context.strokeStyle = "#d26a4a";
  context.lineWidth = 7;
  context.fill();
  context.moveTo(423,260);
  context.lineTo(353,163);
  context.stroke();
  context.closePath();

  // Roof Object Slant
  context.beginPath();
  context.save();
  context.fillStyle = "#f47d58";
  context.rotate(20*Math.PI/180);
  context.rect(130,30,260,140);
  context.fill();
  context.restore();
  context.closePath();

  // Roof Object Panel
  context.beginPath();
  context.save();
  context.fillStyle = "#e77754";
  context.rotate(20*Math.PI/180);
  context.rect(130,30,260,110);
  context.fill();
  context.restore();
  context.closePath();

  // Roof Object Panel
  context.beginPath();
  context.save();
  context.fillStyle = "#da7251";
  context.rotate(20*Math.PI/180);
  context.rect(130,30,260,80);
  context.fill();
  context.restore();
  context.closePath();

  // Roof Object Panel
  context.beginPath();
  context.save();
  context.fillStyle = "#d26c4c";
  context.rotate(20*Math.PI/180);
  context.rect(130,30,260,50);
  context.fill();
  context.restore();
  context.closePath();

  // Roof Object Panel
  context.beginPath();
  context.save();
  context.fillStyle = "#cb6849";
  context.rotate(20*Math.PI/180);
  context.rect(130,30,260,25);
  context.fill();
  context.restore();
  context.closePath();
}

function windows() {
  // Window Right
  context.beginPath();
  context.save();
  context.fillStyle = "#8EC0E4";
  context.rect(210,285,45,70);
  context.strokeStyle = "#5e5944";
  context.stroke();
  context.fill();
  context.restore();
  context.closePath();

  // Window Right Top Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rotate(20*Math.PI/180);
  context.rect(250,170,115,30);
  context.fill();
  context.restore();
  context.closePath();

  // Window Right Bottom Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rotate(20*Math.PI/180);
  context.rect(290,245,105,26);
  context.fill();
  context.restore();
  context.closePath();

  // Window Left
  context.beginPath();
  context.save();
  context.fillStyle = "#8EC0E4";
  context.rect(123,255,45,70);
  context.strokeStyle = "#5e5944";
  context.stroke();
  context.fill();
  context.restore();
  context.closePath();

  // Window Left Top Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rotate(20*Math.PI/180);
  context.rect(170,175,105,26);
  context.fill();
  context.restore();
  context.closePath();

  // Window Left Bottom Cover
  context.beginPath();
  context.save();
  context.fillStyle = "#e7d7d3";
  context.rotate(20*Math.PI/180);
  context.rect(200,245,105,30);
  context.fill();
  context.restore();
  context.closePath();

  // Top Circle Window
  context.save();
  context.beginPath();
  context.fillStyle = "#83b3d5";
  context.translate(344, 240);
  context.scale(15, 18);
  context.arc(1, 1, 1, 0, 2 * Math.PI, false);
  context.lineWidth = 0.3;
  context.strokeStyle = "#5e5944";
  context.stroke();
  context.fill();
  context.restore();
  context.closePath();
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function updateSlider(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmount");
    init(slideAmount);
}
