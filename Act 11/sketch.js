let mic, fft;
let rotation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  noFill();

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0, 0.1);

  let spectrum = fft.analyze();
  let volume = mic.getLevel(); 
  let circleSize = map(volume, 0, 1, 200, 600); 

  translate(width / 2, height / 2);
  rotate(rotation);
  rotation += 0.5;

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let angle = map(i, 0, spectrum.length, 0, 360);
    let innerRadius = 100;
    let outerRadius = map(amp, 0, 256, innerRadius, 300);

    let x1 = innerRadius * cos(angle);
    let y1 = innerRadius * sin(angle);
    let x2 = outerRadius * cos(angle);
    let y2 = outerRadius * sin(angle);

    let baseHue = map(i, 0, spectrum.length, 0, 360);
    let c1 = color(baseHue, 255, 255);
    let c2 = color((baseHue + 60) % 360, 255, 255); 

    let segments = 10;
    for (let j = 0; j < segments; j++) {
      let t1 = j / segments;
      let t2 = (j + 1) / segments;

      let xStart = lerp(x1, x2, t1);
      let yStart = lerp(y1, y2, t1);
      let xEnd = lerp(x1, x2, t2);
      let yEnd = lerp(y1, y2, t2);

      stroke(lerpColor(c1, c2, t1));
      strokeWeight(2);
      line(xStart, yStart, xEnd, yEnd);
    }
  }

 
  noStroke();
  fill(0, 0, 0, 1);
  ellipse(0, 0, circleSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

