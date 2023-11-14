let radio = 50;
let x1, y1, x2, y2, x3, y3;
let velocidadX1, velocidadY1, velocidadX2, velocidadY2, velocidadX3, velocidadY3;
let verdeLima;

function setup() {
  createCanvas(700, 700);
  background(255, 240, 200); // Color de fondo crema (crema claro)

  // Inicializar posiciones aleatorias para los círculos
  x1 = random(radio, width - radio);
  y1 = random(radio, height - radio);
  x2 = random(radio, width - radio);
  y2 = random(radio, height - radio);
  x3 = random(radio, width - radio);
  y3 = random(radio, height - radio);

  // Inicializar velocidades aleatorias para los círculos
  velocidadX1 = random(1, 3);
  velocidadY1 = random(1, 3);
  velocidadX2 = random(1, 3);
  velocidadY2 = random(1, 3);
  velocidadX3 = random(1, 3);
  velocidadY3 = random(1, 3);

  // Color para los círculos verde lima
  verdeLima = color(50, 205, 50);
}

function draw() {
  // Actualizar la posición de los círculos
  x1 += velocidadX1;
  y1 += velocidadY1;
  x2 += velocidadX2;
  y2 += velocidadY2;
  x3 += velocidadX3;
  y3 += velocidadY3;

  // Comprobar colisiones con los bordes del canvas
  if (x1 + radio > width || x1 - radio < 0) {
    velocidadX1 *= -1;
  }
  if (y1 + radio > height || y1 - radio < 0) {
    velocidadY1 *= -1;
  }
  if (x2 + radio > width || x2 - radio < 0) {
    velocidadX2 *= -1;
  }
  if (y2 + radio > height || y2 - radio < 0) {
    velocidadY2 *= -1;
  }
  if (x3 + radio > width || x3 - radio < 0) {
    velocidadX3 *= -1;
  }
  if (y3 + radio > height || y3 - radio < 0) {
    velocidadY3 *= -1;
  }

  // Dibujar los círculos
  background(255, 240, 200); // Limpiar el fondo
  fill(verdeLima);
  noStroke();
  ellipse(x1, y1, radio * 2);
  ellipse(x2, y2, radio * 2);
  ellipse(x3, y3, radio * 2);
}
