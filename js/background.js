const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// colori da mischiare: nero, grigio, viola e arancione
const colors = [
  { r: 0, g: 0, b: 0 },        // nero
  { r: 50, g: 50, b: 55 },     // grigio scuro
  { r: 120, g: 0, b: 200 },    // viola intenso
  { r: 200, g: 100, b: 255 },  // viola chiaro / lilla
  { r: 255, g: 120, b: 0 },    // arancione acceso
  { r: 180, g: 80, b: 0 }      // arancione scuro / bruciato
];


let mouseX = width / 2, mouseY = height / 2;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function draw() {
  // sfondo nero
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  // crea alcuni focal points che reagiscono al mouse
  colors.forEach((col, i) => {
    const grad = ctx.createRadialGradient(
      // posizione che varia un po' con il mouse
      (mouseX * (0.2 + i * 0.15)) % width,
      (mouseY * (0.2 + i * 0.1)) % height,
      0,
      (mouseX * (0.2 + i * 0.15)) % width,
      (mouseY * (0.2 + i * 0.1)) % height,
      width * 0.5
    );
    const c = `rgba(${col.r},${col.g},${col.b},0.5)`;
    grad.addColorStop(0, c);
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  });

  requestAnimationFrame(draw);
}

draw();
