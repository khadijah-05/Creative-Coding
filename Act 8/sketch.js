let mic;
let colors = [
  "#ffd1dc", // pastel pink
  "#c1f0f6", // pastel blue
  "#f6eac2", // pastel yellow
  "#d2f5e3", // pastel green
  "#e5d0ff"  // pastel purple
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  
  // Initialize microphone input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Current volume level from the mic
  let micLevel = mic.getLevel() * height * 3;

  // Pick a random pastel color from the array
  fill(random(colors));
  noStroke();

  // Draw a rect at the mouse position, size depends on mic volume
  rect(mouseX, mouseY, micLevel);
}

