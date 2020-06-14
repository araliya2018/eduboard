var canvas = document.getElementById("draw");
canvas.style.border = "5px solid";
var ctx = canvas.getContext("2d");
resize();
var currentColor = "black";
var currentBg = "white";
var currentSize=2;
// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

 

  ctx.beginPath(); // begin the drawing path
  ctx.fillStyle = currentBg;
  ctx.lineWidth = currentSize; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = currentColor; // hex color of line
	
		
  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
  
}

function eraser() {

  currentSize = 50;
  currentColor =  ctx.fillStyle;
}

function clear_can() {
  location.reload();
}


// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

 document.getElementById('colorpicker').addEventListener('change', function() {
  currentColor = this.value;
 });

 document.getElementById('bgcolorpicker').addEventListener('change', function() {
  ctx.fillStyle = this.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  redraw();
  currentBg = ctx.fillStyle;
});


document.getElementById('eraser').addEventListener('click', eraser);
document.getElementById('clear').addEventListener('click', clear_can);
document.getElementById('mySelect').addEventListener('change', function() {
  currentSize =  document.getElementById("mySelect").value ;
  console.log(currentSize);

});
