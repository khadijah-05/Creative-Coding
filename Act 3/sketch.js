function setup() {
  createCanvas(400, 400);
  background(0); 
  drawAlien();
}

function drawAlien() {
  translate(width / 2, height / 2 + 20); // Center the alien

  UFO();
  Head();
  Eyes();
  Nostrils();
  Mouth();
  Hands();
}

function UFO() {
  push();
  fill(40, 0, 70); // Dark purple
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(-150, 30);
  bezierVertex(-100, 80, 100, 80, 150, 30);
  bezierVertex(100, -20, -100, -20, -150, 30);
  endShape(CLOSE);

  // Stars
  fill(255);
  for (let i = -120; i <= 120; i += 30) {
    ellipse(i, 35 + random(-10, 10), 3, 3);
  }
  pop();
}

function Head() {
  push();
  fill(100, 255, 100); // Bright green
  stroke(0);
  strokeWeight(3);
  scale(1, 1.2); // Slightly stretch vertically
  ellipse( 0, -10, 120, 130); // Head shape
  pop();
}

function Eyes() {
  Eye(-30, -30);
  Eye(30, -30);
}

function Eye(x, y) {
  push();
  translate(x, y);
  scale(1.2, 1.8);
  fill(0);
  noStroke();
  beginShape();
  vertex(0, -15);
  bezierVertex(15, -15, 15, 15, 0, 15);
  bezierVertex(-15, 15, -15, -15, 0, -15);
  endShape(CLOSE);

  // Shine
  fill(255);
  ellipse(-5, -5, 5, 5);
  pop();
}

function Nostrils() {
  fill(0);
  ellipse(-5, -5, 3, 6);
  ellipse(5, -5, 3, 6);
}

function Mouth() {
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(-10, 20); 
  bezierVertex(-5, 25, 5, 25, 10, 20); // curve
  endShape();
}


function Hands() {
  fill(100, 255, 100); // Same green color as head
  stroke(0);
  strokeWeight(3);
  ellipse(-45, 50, 30, 30); 
  ellipse(45, 50, 30, 30);  
}
