class Canvas {
  constructor(cv) {
    this.ctx = cv.getContext('2d');
    this.cvWidth = cv.width;
    this.cvHeight = cv.height;
    this.lastRender = 0;

    this.loop = this.loop.bind(this);
  }

  update(progress) {}

  draw(timestamp) {
    this.ctx.clearRect(0, 0, this.cvWidth, this.cvHeight);

    this.ctx.fillRect(10, 10, 20, 20);
    this.ctx.fillText(timestamp, 30, 30, 100);
  }

  loop(timestamp) {
    const progress = timestamp - this.lastRender;

    this.update(progress);
    this.draw(timestamp);

    this.lastRender = timestamp;
    requestAnimationFrame(this.loop);
  }

  start() {
    requestAnimationFrame(this.loop);
  }
}

const main = new Canvas(document.getElementById('canvas'));
main.start();
