
// The setup function runs once
function setup() {
  
  createCanvas(800, 600);
  background('blue');
  
}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
	
  	fill(255,252,105);
	ellipse(800,10,200,200);
	
	fill('beige');
	triangle(337.5,262.5,462.5,262.5,400,500);
	
	var randomRed = random(0,255);
	var randomBlue = random(0,255);
	var randomGreen = random(0,255);
	
	var newColor = color(randomRed, randomBlue, randomGreen);
	fill(newColor);
	ellipse(400,200,200,200);
	

  fill(value);
  ellipse(25, 25, 50, 50);
}


