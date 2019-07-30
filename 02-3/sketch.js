/**
 * Problem: Create a program that fills the screen with randomly sized rectangles that do not overlap,
 * but fill the screen. The maximum size of a rectangle is 1/15th of the screen size.
 * 
 * Notes: Instead of maximum size, the minimum size is 1/32 of the canvas and the maximum is 1/4 of the screen. Squares instead of rectangles.
 * 
 * 
 */

function setup () {
  createCanvas(300,300);
  pixelDensity(1);
}

function draw () {
  noLoop();
  recursive(0,0,300,300);
}

function recursive (x, y, w, h) {

  if (w <= 9 || h <= 9) {
    return;
  }
  
  if (random() <= 0.25) {
    return;
  } else {

    line (x + w/2, y, x + w/2, y + h);
    line (x, y + h/2, x + w, y + h/2);

    recursive (x, y, w/2, h/2);
    recursive (x + w/2, y, w/2, h/2);
    recursive (x, y + h/2, w/2, h/2);
    recursive (x + w/2, y + h/2, w/2, h/2);
  }
}