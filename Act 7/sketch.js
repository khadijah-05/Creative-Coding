let particles = [];

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100, 1);
  background(0);
  noStroke();
}

function draw() {
  // Fading background for trailing effect
  fill(0, 0, 0, 0.1);
  rect(0, 0, width, height);

  // New particles at mouse position with random speed
  for (let i = 0; i < 6; i++) {
    particles.push({
      x: mouseX + random(-10, 10),
      y: mouseY + random(-10, 10),
      vx: random(-2, 2),
      vy: random(-2, 2),
      size: random(5, 10),
      life: 255,
      hue: random(0, 360)
    });
  }

  // Particles
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 5;

    fill(p.hue, 80, 90, p.life / 255);
    ellipse(p.x, p.y, p.size);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }

  // Limit count
  if (particles.length > 300) {
    particles.splice(0, particles.length - 300);
  }
}

