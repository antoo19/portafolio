let particles = [];

function setup() {
  createCanvas(600, 400);
  
  // Crear partículas
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0); // Fondo negro

  // Actualizar y mostrar partículas
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

class Particle {
  constructor() {
    // Posición inicial aleatoria
    this.x = random(width);
    this.y = random(height);
    
    // Inicializar variables de ruido
    this.noiseX = random(0, 1000);
    this.noiseY = random(0, 1000);
  }

  update() {
    // Actualizar posición usando ruido
    this.x = map(noise(this.noiseX), 0, 1, 0, width);
    this.y = map(noise(this.noiseY), 0, 1, 0, height);

    // Ajustar el ruido para el siguiente fotograma
    this.noiseX += 0.01;
    this.noiseY += 0.01;
  }

  display() {
    // Dibujar la partícula
    fill(255); // Partículas blancas
    ellipse(this.x, this.y, 10, 10);
  }
}
