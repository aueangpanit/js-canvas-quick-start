const cv = document.getElementById('canvas');
const ctx = cv.getContext('2d');
const cvWidth = cv.width;
const cvHeight = cv.height;

function update(progress) {}

function draw() {
  ctx.clearRect(0, 0, cvWidth, cvHeight);
}

function loop(timestamp) {
  const progress = timestamp - lastRender;

  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

let lastRender = 0;
window.requestAnimationFrame(loop);
