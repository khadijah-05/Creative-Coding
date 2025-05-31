let img, x, y;

function preload() {
  img = loadImage("image 1.jpg"); // image
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  image(img, 0, 0, 400, 400); // Fit image to canvas

  x = mouseX;
  y = mouseY;

  let c = get(x, y);
  fill(c);

  drawStar(x, y, 10, 25, 5); // Star mouse
}

// Function to draw a star
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
