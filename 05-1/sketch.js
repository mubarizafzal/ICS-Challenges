/**
 * Problem: Create a program that draws perpendicular vectors based on where you clicked the mouse. 
 *          For example if I click at position (50, 50), and then at position (100, 50) there would be a vector drawn at (75, 75) to (75, 125). 
 *          Store all of these vectors in an ArrayList. 
 *          On a particular key press, the program should draw all of the perpendicular vectors stored with random colors and triangles at the end points of the vectors to show direction.
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

// key press

function draw () {
  noLoop();
  background(255);

  let v = createVector(20,20);
  console.log(v.mag());
}
