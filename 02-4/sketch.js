/**
 * Problem: Create a program that draws between 80 and 120 points (randomly chosen) to the screen.
 * Have the program connect the dots using lines; however, you can only generate non-overlapping triangles.
 * 
 * Notes: 
 * 
 * 
 */

function setup () {
  createCanvas(300,300);
  pixelDensity(1);
}

function draw () {
  noLoop();
  
  triangles(300,300);

}



function triangles (w, h) {

  // will attempt to use Delaunay triangulation to solve this



}