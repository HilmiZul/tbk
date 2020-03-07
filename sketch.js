let pleft;
let pright;
let ballLeft = [];
let ballRight = [];

function setup() {
  createCanvas(800, 400);
  pleft = new Player(0 + 20, height / 2, 'left');
  pright = new Player(width - 20, height / 2, 'right');
}

function draw() {
  background(100, 100, 250);

  for (let i = 0; i < ballLeft.length; i++) {
    ballLeft[i].show();
    ballLeft[i].update(10);
    if (ballLeft[i].edges()) {
      ballLeft.splice(i, 1);
    }
  }

  for (let i = 0; i < ballRight.length; i++) {
    ballRight[i].show();
    ballRight[i].update(-10);
    if (ballRight[i].edges()) {
      ballRight.splice(i, 1);
    }
  }

  pleft.show();
  pleft.update();
  pleft.edges();

  pright.show();
  pright.update();
  pright.edges();
}

function keyPressed() {
  if (key == 'a' || key == 'A') {
    pleft.up = true;
  }
  else if (key == 'z' || key == 'Z') {
    pleft.down = true;
  }
  else if (key == 'j' || key == 'J') {
    pright.up = true;
  }
  else if (key == 'm' || key == 'M') {
    pright.down = true;
  }
  else if (key == 's' || key == 'S') {
    ballLeft.push(new Ball(pleft.pos.x, pleft.pos.y));
  }
  else if (key == 'k' || key == 'K') {
    ballRight.push(new Ball(pright.pos.x, pright.pos.y));
  }
}

function keyReleased() {
  pleft.up = false;
  pleft.down = false;
  pright.up = false;
  pright.down = false;
}