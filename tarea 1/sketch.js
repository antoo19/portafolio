let angle = 0;
let spacing = 30;
let offset = 0;
let trail = [];

function setup() {
  createCanvas(600, 600);
  background(255,255,190);
}

function draw() {
  translate(width / 2, height / 2);

  let x = cos(angle) * 150;
  let y = sin(angle * 2) * 100;

  trail.push(createVector(x, y));
  offset += 0.05;

  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 100, 255);
    stroke(0, alpha);
    if (i % 2 === 0) {
      strokeWeight(1);
    } else {
      strokeWeight(2);
    }
    if (i > 1) {
      line(trail[i - 1].x, trail[i - 1].y, trail[i].x, trail[i].y);
    }
  }

  if (trail.length > 100) {
    trail.splice(0, 1);
  }

  angle += 0.02;
}


