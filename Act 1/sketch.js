function setup() {
  createCanvas(400, 400);
  background(40); // Dark gray 

  //Car Body
  fill(137, 207, 240); // Light blue color
  rect(120, 200, 160, 60, 10); // Main body

  //Car top
  fill(137, 207, 240); // Light blue color
  beginShape();
  vertex(140, 200);
  vertex(260, 200);
  vertex(240, 150);
  vertex(160, 150);
  endShape(CLOSE);

  //Windshield
  fill(255, 255, 255); // glass
  rect(165, 155, 70, 45, 5);

  //Rear-view mirror
  fill(40); // Dark gray
  rect(195, 155, 10, 5);

  //Side Mirrors 
  fill(40);// Dark gray
  ellipse(115, 205, 12, 10);
  ellipse(285, 205, 12, 10);

  //Grill 
  fill(30);// gray
  rect(165, 220, 70, 15, 4);
  stroke(80);
  for (let i = 0; i < 5; i++) {
    line(170 + i * 13, 220, 170 + i * 13, 232);
  }
  noStroke();

  //Headlights
  fill(255, 240, 150); // yellow 
  ellipse(145, 220, 20);
  ellipse(255, 220, 20);

  //Tires
  fill(20);// black 
  rect(135, 250, 20, 22, 3);
  rect(245, 250, 20, 22, 3);

  //License Plate
  fill(255);// White 
  rect(180, 240, 40, 20, 3);

  //Seats
  fill(50);// gray
  rect(170, 180, 20, 20, 3);
  rect(210, 180, 20, 20, 3);
}
