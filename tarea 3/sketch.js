function setup() {
  createCanvas(500, 500);
}

function draw() {
  // No necesitamos dibujar nada continuamente en este caso.
}

function mouseClicked() {
  // Obtener la posición del clic
  let x = mouseX;
  let y = mouseY;

  // Elegir un color aleatorio
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Dibujar el timbre
  fill(r, g, b);
  ellipse(x, y, 50, 50);

  // Configurar el texto "c:" en el timbre
  fill(255); // Color de texto en blanco
  textSize(20); // Tamaño de texto
  textAlign(CENTER, CENTER); // Alineación centrada
  text("c:", x, y);
}


