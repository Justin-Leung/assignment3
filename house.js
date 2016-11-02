
// Calculates New Position For Ball
function normalize(v) {
    var length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {x: v.x / length, y: v.y / length};
}

// Variable Declaration
var canvas, currenVal, context, target = {x: 235, y: -30}; // Target is where the bubbles will move.
var position = {x: 235, y: 20}; // Position is the location where the bubbles start.
var step = normalize({x: target.x - position.x, y: target.y - position.y}); // Caclulates the length until target.
//var grd = ctx.createRadialGradient(30,30,0,30,30,30);
//grd.addColorStop(0, 'rgba(133, 133, 133, .65)');
//grd.addColorStop(0.8, 'rgba(133, 133, 133, .2)');
//grd.addColorStop(1, 'rgba(133, 133, 133, 0)');

// Creates canvas and context, also starts the smoke animation.
function init(speed) {
   canvas = document.getElementById('houseCanvas');
   if(canvas.getContext)
      context = canvas.getContext('2d');
   else return;

   clearInterval(currenVal); // Stops the current smoke animation
   currenVal = setInterval(smoke1, 1000 / speed); // Starts the new animation using the speed from the range
}

// Smoke Function
function smoke1() {

  // Check if the animation is position is off screen, if so restart the animation.
  if(position.y < -35) {
    position.y = 20;
    position.x = 235;
  } else {

    // Clears the animation.
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Smoke Chunk
    context.beginPath();
    context.arc(position.x, position.y, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
//    context.fillStyle = "#E0E3DA";
    context.fillStyle = "yellow";
    context.fill();
    context.closePath();

    // Smoke Chunk
//    context.fillStyle = "#cbcdc5";
    context.fillStyle = "#cbcdc5";
    context.beginPath();
    context.arc(position.x - 30, position.y - 10, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
//    context.fillStyle = "#bec1b7";
    context.fillStyle = "#bec1b7";
    context.beginPath();
    context.arc(position.x + 60, position.y + 30, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#cbcdc5";
//    context.fillStyle = grd;
    context.beginPath();
    context.arc(position.x + 50, position.y - 10, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#cbcdc5";
//    context.fillStyle = grd;
    context.beginPath();
    context.arc(position.x + 30, position.y + 65, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#d4d7c8";
    context.beginPath();
    context.arc(position.x + 23, position.y + 35, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#d9ddcd";
    context.beginPath();
    context.arc(position.x + 23, position.y - 35, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#d7dacf";
    context.beginPath();
    context.arc(position.x, position.y - 45, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#cbd0bf";
    context.beginPath();
    context.arc(position.x - 10, position.y + 45, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#caccc1";
    context.beginPath();
    context.arc(position.x + 20, position.y + 85, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    // Smoke Chunk
    context.fillStyle = "#c9c9c7";
    context.beginPath();
    context.arc(position.x + 20, position.y + 115, (Math.floor(Math.random() * (30 - 25 + 1)) + 25), 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

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

    // Chimney Back Dark Side
    context.beginPath();
    context.save();
    context.fillStyle = "#8e726c";
    context.rect(240,98,45,60);
    context.fill();
    context.restore();
    context.closePath();

    // Chimney Front Bright Side
    context.beginPath();
    context.save();
    context.fillStyle = "#a38a83";
    context.rect(225,98,45,60);
    context.fill();
    context.restore();
    context.closePath();

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

    // Door
    context.beginPath();
    context.save();
    context.fillStyle = "#837b6e";
    context.rect(340,295,44,100);
    context.fill();
    context.restore();
    context.closePath();

    // Top Door
    context.beginPath();
    context.save();
    context.fillStyle = "#ddcdc9";
    context.rotate(-16*Math.PI/180);
    context.rect(220,365,75,30);
    context.fill();
    context.restore();
    context.closePath();

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

    // Left Panel 1 Cover
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

  position.x += step.x;
  position.y += step.y;
}

function updateSlider(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmount");
    init(slideAmount);
}

init(60);
