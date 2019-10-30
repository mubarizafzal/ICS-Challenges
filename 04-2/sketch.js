/**
 * Problem: Create a program that draws 100 circles with a partial transparency.
 *          After drawing the 100 circles, search for any overlapping areas and display a count of the total amount of pixels in the overlapping areas.
 * 
 * Notes: 
 * 
 * 
 */


function setup () {
  createCanvas(500,500);
  pixelDensity(1);
  rectMode(CORNERS);
  stroke(255);
  textSize(15);

}


function draw () {
  background(255);
  noLoop();
  
  
  for (let i = 0; i < 100; i++) {
    let ranX = Math.random()*width;
    let ranY = Math.random()*height;

    fill(150,150,150, 50);
    circle(ranX, ranY, 30);
  }
  


  loadPixels();
  
  let count = 0;
    
  for (let i = 0; i < pixels.length; i = i + 4) {

    let gray = pixels[i];
    if (gray < 220) {
      count++;
    }
  }
  
  fill(0);
  text("Amount of pixels in shaded regions: " + count, 0, 20);
 
}
