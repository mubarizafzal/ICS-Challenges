/**
 * Problem: Create a program that draws 100 circles to the screen of random colours with a strokeWeight of 1.
 *          After drawing the 100 circles, search for any pixel on the screen that has a red value greater than 150,
 *          and draw a rectangle around the circles in order to highlight them.
 * 
 * Notes: 
 * 
 * 
 */


// a hundred random points
// not working properlly

function setup () {
  createCanvas(500,500);
  pixelDensity(1);
  rectMode(CENTER);
  colorMode(RGB, 255);
  stroke(2);
  textSize(20);

}


function draw () {
  background(255);
  noLoop();

  strokeWeight(1);
  let MAX = 100;
  let arrX = [];
  let arrY = [];
  let arrR = [];

  for (let i = 0; i < MAX; i++) {
    let ranX = Math.floor(Math.random()*width);
    let ranY = Math.floor(Math.random()*height);
    
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    
    fill(r, g, b);
    circle(ranX, ranY, 30);

    if (arrX.includes(ranX)) {
      let index = arrX.indexOf(ranX);
      if (arrY[index] == ranY) {
        // same cords
        arrR[index] = r;

      } else {
        arrR.push(r);
        arrX.push(ranX);
        arrY.push(ranY);
      }
    } else {
      arrR.push(r);
      arrX.push(ranX);
      arrY.push(ranY);
    }
  }
  
  // need to loop pixel array, 
  // last circle that contains that pixel  
  
  noFill();
  for (let i = 0; i < arrX.length; i++) {
    if (arrR[i] >= 200) {
      let x = arrX[i];
      let y = arrY[i];

      rect(x, y, 30, 30);
    }
  }

}





