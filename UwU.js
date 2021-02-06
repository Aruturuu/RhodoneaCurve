//Values
let i = 1;     //iterations
let amp = 200; //amplifier
let n = 4;
let d = 5;
//

function setup() {
  //Canvas
  createCanvas(windowWidth, windowHeight)
  background(50,50,50)
  frameRate(300)
  stroke(255)
  //

  //HTML
  const amplog = document.getElementById('amp');
  const nlog = document.getElementById('n');
  const dlog = document.getElementById('d');
  const colorlog = document.getElementById('color');

  amplog.addEventListener('change', updateAMPlog);
  nlog.addEventListener('change', updateNlog);
  dlog.addEventListener('change', updateDlog);
  colorlog.addEventListener('change', updateCOLORlog);

  function updateAMPlog(ampValue) {
    amp = ampValue.target.value;
    background(50, 50, 50)
  }
  function updateNlog(nValue) {
    n = nValue.target.value;
    background(50, 50, 50)
  }
  function updateDlog(dValue) {
    d = dValue.target.value;
    background(50, 50, 50)
  }
  function updateCOLORlog(colorValue) {
    color = colorValue.target.value;
    background(50, 50, 50)
    stroke(color)
  }
  //
}

function draw() {
  i++
  a = i * PI / amp;
  x = cos(n / d * a) * cos(a) * amp + windowWidth/2;
  y = 1 - cos(n / d * a) * sin(a) * amp + windowHeight/2;
  strokeWeight(4)
  line(x, y, x, y)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}