/**
 * Problem: Generate a rectangle on the screen, with one corner being at (mouseX, mouseY). 
 *          Create a function that calculates the perimeter around that rectangle, and returns the answer as a float. 
 *          Display that information on the screen. The function should update the answer as you move the mouse.
 * 
 * Notes: Top left corner of rectangle is always randomly chosen.
 * 
 * 
 */

 let x;
 let y;

function setup () {
  createCanvas(500,500);
  pixelDensity(1);
  rectMode(CORNERS);
  strokeWeight(2);
  textSize(30);
  x = Math.floor(Math.random()*width);
  y = Math.floor(Math.random()*height);

}

function draw () {
  background(255);

  
  fill(0);
  text(perimeter(x, y, mouseX, mouseY), width/2, 30);
  
  noFill();
  rect(x, y, mouseX, mouseY);

}

function perimeter (x1, y1, x2, y2) {
  return (Math.abs(x1 - x2) + 1)*2 + (Math.abs(y1 - y2 + 1) + 1)*2
}