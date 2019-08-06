/**
 * Problem: Create a screen that is equal in width and height. 
 *          Generate a rectangle on the screen centred both vertically and horizontally that is half the width (or height) of the screen. 
 *          Generate a circle that is also centred on the screen. As you move your mouse, your circle should grow and shrink relative to the mouse position. 
 *          The diameter should have a maximum value equal to 1/2 the width (or height) of your screen. 
 *          Create a function that calculates the visible portion of the rectangle and returns that information to the text() function.
 * 
 * Notes: 
 * 
 * 
 */

function setup () {
  createCanvas(500,500);
  pixelDensity(1);
  rectMode(CORNERS);
  stroke(2);
  textSize(20);

}


function draw () {

  background(255);

  fill('#78a2d6');
  rect(width/4, height/4, width*3/4, height*3/4);
  
  fill('#cdd678');
  circle(width/2, height/2, getDiameter());

  fill(0);
  text("The area of the blue portion is: " + difference(getDiameter()/2), 20, 20);

}

function getDiameter () {
  x = width/2;
  y = height/2;
  let d = dist(x, y, mouseX, mouseY)*2;
  if (d > width/2) {
    d = width/2;
  } 
  return d;
}

function circleArea (radius) {
  return Math.PI*radius*radius;
}

function difference (radius) {
  let rectArea = (width/2)*(height/2);
  return rectArea - circleArea(radius);

}