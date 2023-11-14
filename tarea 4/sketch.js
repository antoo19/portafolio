function setup() {
  createCanvas(2964, 698);
  background(255); // Fondo blanco
}

function draw() {
  // Dibuja 5 flores de color azul claro
  for (let i = 0; i < 5; i++) {
    let x = random(width); // Posición x aleatoria
    let y = random(height); // Posición y aleatoria
    drawFlower(x, y);
  }
}

function drawFlower(x, y) {
  // Configura el color de la flor (azul claro)
  fill(173, 216, 230); // RGB para azul claro
  noStroke(); // Sin borde

  // Dibuja el tallo de la flor
  rect(x - 2, y, 4, 60);

  // Dibuja los pétalos de la flor
  for (let angle = 0; angle < 360; angle += 72) {
    let petalX = x + cos(radians(angle)) * 30;
    let petalY = y + sin(radians(angle)) * 30;
    ellipse(petalX, petalY, 45, 45);
  }

  // Dibuja el centro de la flor
  fill(255, 215, 0); // Amarillo claro
  ellipse(x, y, 20, 20);
}
