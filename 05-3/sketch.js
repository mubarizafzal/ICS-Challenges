/**
 * Problem: Create a program with 20 moving rectangles of 10 different colors. 
 *          Each pair of colour-matching rectangles should have vectors pointing at each other, of a length that is double the width of the rectangles. 
 *          If the rectangles come within range of each other's vector distance, the vectors should be removed permanently, and the rectangles should turn white.
 *          Have a key press available to restart your program.
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

}