function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
  frameRate(60);
}

function draw() {
  background(20, 30, 40, 30); // Trail effect

  translate(width / 2, height / 2);

  let circles = 6; // Petal circles
  let petalsPerCircle = 12;
  let baseRadius = 40;

  for (let i = 0; i < circles; i++) {
    let radius = baseRadius + i * 40;

    // Speed 
    let rotationSpeed = 0.5 + 0.1 * i;
    let rotation = frameCount * rotationSpeed * (i % 2 == 0 ? 1 : -1);

    push();
    rotate(rotation);

    for (let p = 0; p < petalsPerCircle; p++) {
      let angle = (360 / petalsPerCircle) * p;

      // petal position
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;

      // dynamic color based on position and time
      let r = map(sin(frameCount * 2 + i * 50 + p * 20), -1, 1, 100, 255);
      let g = map(cos(frameCount * 2 + i * 70 + p * 30), -1, 1, 50, 200);
      let b = map(sin(frameCount * 3 + i * 90 + p * 10), -1, 1, 150, 255);

      fill(r, g, b, 180);

      push();
      translate(x, y);
      rotate(angle + frameCount * 3); // petal rotates individually

      // petal shape 
      beginShape();
      vertex(0, 0);
      bezierVertex(15, -8, 25, -2, 25, 0);
      bezierVertex(25, 2, 15, 8, 0, 0);
      endShape(CLOSE);

      pop();
    }

    pop();
  }
}
