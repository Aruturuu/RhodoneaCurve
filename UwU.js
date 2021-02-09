let interval
const camvas = document.getElementById("camvas")
const slider = document.getElementById("slider")
const slider2 = document.getElementById("slider2")
const slider3 = document.getElementById("slider3")
const label = document.getElementById("label")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
camvas.width = window.innerWidth
camvas.height = window.innerHeight - 60
const drawLine = (xStart, yStart, xFinish, yFinish, color) => {
  const ctx = camvas.getContext('2d')
  if (ctx) {
    ctx.lineCap = "round"
    ctx.lineWidth = 5
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(xStart, yStart)
    ctx.lineTo(xFinish, yFinish)
    ctx.stroke()
  }
}
function drawLissajous(b, a, size) {
  let x = 0
  let y = 0
  let i = 0
  let t = i * Math.PI / 200
  let prevX = Math.cos(b / a * t) * Math.cos(t) * size + window.innerWidth / 2
  let prevY = 1 - Math.cos(b / a * t) * Math.sin(t) * size + (window.innerHeight - 60) / 2
  let hsl = 0;
  let hslIsGrowing = true;

  const getNextHslValue = (previousValue, isGrowing) => {
    if (!(previousValue < 360)) {
      isGrowing = false;
    }
    if (previousValue === 1) {
      isGrowing = true;
    }
    previousValue = isGrowing ? previousValue + 1 : previousValue - 1;
    return [previousValue, isGrowing];
  }
  interval = setInterval(() => {
    [hsl, hslIsGrowing] = getNextHslValue(hsl, hslIsGrowing);
    x = Math.cos(b / a * t) * Math.cos(t) * size + window.innerWidth / 2
    y = 1 - Math.cos(b / a * t) * Math.sin(t) * size + (window.innerHeight - 60) / 2
    drawLine(prevX, prevY, x, y, `hsl(${hsl}, 90%, 61%)`)
    i += 0.005
    t = i * Math.PI
    prevX = x
    prevY = y
  }, 0.1)
}
const clearCanvas = () => {
  const ctx = camvas.getContext('2d')
  ctx.clearRect(0, 0, camvas.width, camvas.height)
  if (interval) {
    clearInterval(interval)
  }
}
label.innerHTML = `Size: ${parseInt(slider.value)}`
label2.innerHTML = `N: ${parseInt(slider2.value)}`
label3.innerHTML = `D: ${parseInt(slider3.value)}`
drawLissajous(4, 5, 200)
slider.addEventListener("change", (e) => {
  const value = parseInt(e.target.value)
  const value2 = parseInt(slider2.value)
  const value3 = parseInt(slider3.value)
  clearCanvas()
  drawLissajous(value2, value3, value)
  label.innerHTML = `Size: ${value}`
})
slider2.addEventListener("change", (e) => {
  const value = parseInt(slider.value)
  const value2 = parseInt(e.target.value)
  const value3 = parseInt(slider3.value)
  clearCanvas()
  drawLissajous(value2, value3, value)
  label2.innerHTML = `N: ${value2}`
})
slider3.addEventListener("change", (e) => {
  const value3 = parseInt(e.target.value)
  const value2 = parseInt(slider2.value)
  const value = parseInt(slider.value)
  clearCanvas()
  drawLissajous(value2, value3, value)
  label3.innerHTML = `D: ${value3}`
})
window.onresize = resize
function resize(){
  window.location.reload()
}
//Chamsteww-chan be UwU
