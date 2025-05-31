let quote = "Focus";
let font;
let points = [];
let fontSize = 200;
let bgStars = [];

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
} // Load a the font 

function setup() {
  createCanvas(1000, 1000);
  textFont(font);
  textSize(fontSize);

  // Convert the quote into a series of points
  let bounds = font.textBounds(quote, 0, 0, fontSize);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;
  points = font.textToPoints(quote, x, y, fontSize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });

  // Background stars
  for (let i = 0; i < 300; i++) {
    bgStars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(0.1, 0.5)
    });
  }

  noStroke();
}

function draw() {
  background(10); 

  // Draw background stars
  fill(255, 100);
  for (let star of bgStars) {
    ellipse(star.x, star.y, star.size);
    star.y += star.speed;
    if (star.y > height) star.y = 0;
  }

  fill(255);      

  // Interaction based on mouse position
  let mouseInfluence = map(mouseX, 0, width, 0.05, 0.5);
  let motionScale = map(mouseY, 0, height, 5, 20);

  // Loop through each point and adding animation
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let angle = frameCount * mouseInfluence + i * 0.1; 
    let offsetX = sin(angle) * motionScale;            
    let offsetY = cos(angle) * motionScale;
    let size = map(sin(angle), -1, 1, 1, 5); 

    ellipse(p.x + offsetX, p.y + offsetY, size, size); // Animated point
  }
} 
