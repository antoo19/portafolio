let backgroundImage;
let buttons = [];

function preload() {
  // No necesitas cargar la imagen aquí
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Carga tu imagen de fondo aquí
  backgroundImage = loadImage('flores.jpg', () => {
    // Crea los botones después de cargar la imagen
    for (let i = 0; i < 6; i++) {
      let button = createButton('Página ' + (i + 1));
      button.position(20, 40 + i * 60);
      button.mousePressed(() => {
        window.location.href = 'pagina' + (i + 1) + '.html';
      });
      buttons.push(button);
    }
  });
}

function draw() {
  // Dibuja el fondo
  background(backgroundImage);

  // Puedes agregar más elementos o gráficos si es necesario
}

