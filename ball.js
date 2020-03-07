class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 10;
    this.fireLeft = false;
  }

  show() {
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  update(step) {
    this.pos.x += step;
  }

  edges() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
  }
}