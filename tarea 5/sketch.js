let stars = []; // Almacenar las estrellas

function setup() {
  createCanvas(windowWidth, windowHeight); // Crear un lienzo que cubra toda la pantalla
  background(173, 216, 230); // Establecer un celeste más claro como color de fondo
}

function draw() {
  // Dibujar las estrellas y hacerlas mover
  background(173, 216, 230); // Refrescar el fondo en cada fotograma

  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].display();

    // Eliminar estrellas que están fuera del canvas
    if (stars[i].offscreen()) {
      stars.splice(i, 1);
    }
  }
}

function mouseClicked() {
  // Al hacer clic, crear nuevas estrellas en el lugar del clic
  let numStars = random(5, 10); // Número aleatorio de estrellas
  for (let i = 0; i < numStars; i++) {
    let star = new Star(mouseX, mouseY);
    stars.push(star);
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(5, 20);
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    // Mover la estrella
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    // Dibujar la estrella
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }

  offscreen() {
    // Verificar si la estrella está fuera del canvas
    return (
      this.x < 0 ||
      this.x > width ||
      this.y < 0 ||
      this.y > height
    );
  }
}








