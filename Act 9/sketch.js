let data = [
  { month: "Jan", temp: 24.1 },
  { month: "Feb", temp: 25.9 },
  { month: "Mar", temp: 29.5 },
  { month: "Apr", temp: 34.6 },
  { month: "May", temp: 39.1 }
];

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
  textSize(14);
}

function draw() {
  background(245);
  let margin = 80;
  let barWidth = (width - 2 * margin) / data.length;
  let maxTemp = max(data.map(d => d.temp));
  let minTemp = min(data.map(d => d.temp));

  for (let i = 0; i < data.length; i++) {
    let x = margin + i * barWidth;
    let h = map(data[i].temp, 0, maxTemp, 0, height - 100);

    // Gradient 
    let norm = map(data[i].temp, minTemp, maxTemp, 0, 1);
    let r = lerp(0, 255, norm);
    let g = lerp(100, 50, norm);
    let b = lerp(255, 0, norm);

    fill(r, g, b);
    rect(x, height - h - 40, barWidth * 0.7, h);

    // Temperature value above the bar
    fill(0);
    text(`${data[i].temp}°C`, x + barWidth * 0.35, height - h - 60);

    // Month label under the bar
    text(data[i].month, x + barWidth * 0.35, height - 20);
  }

  fill(0);
  textSize(18);
  text("UAE's Highest Temp in 2025", width / 2, 30);
}
