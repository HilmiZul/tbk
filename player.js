class Player {
  constructor(x, y, player) {
    this.pos = createVector(x, y);
    this.step = 5;
    this.up = false;
    this.down = false;
    this.w = 20;
    this.h = 100;
    this.player = player;
  }

  show() {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w, this.h);
    if (this.player == 'left') {
      rect(this.pos.x+10, this.pos.y, this.w, 10);
    } else {
      rect(this.pos.x-10, this.pos.y, this.w, 10);
    }
    
  }
  
  update() {
    if(this.up) {
      this.pos.y = this.pos.y - this.step;
    }
    if(this.down) {
      this.pos.y = this.pos.y + this.step;
    }
  }
  
  edges() {
    if(this.pos.y < 0 + this.h/2) {
      this.pos.y = 0 + this.h/2;
    }
    if(this.pos.y > height - this.h/2) {
      this.pos.y = height - this.h/2;
    }
  }
}


