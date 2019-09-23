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

  for (let i = 0; i < MAX; i++) {
    let ranX = Math.floor(Math.random()*width);
    let ranY = Math.floor(Math.random()*height);
    
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    fill(r, g, b);
    circle(ranX, ranY, 30);

    if (r > 150) {
      
      arrX.push(ranX);
      arrY.push(ranY);
    }

  }

  // need to loop pixel array, 
  // last circle that contains that pixel  
  
  noFill();
  loadPixels();

  let count = 0;
  let redVal;
  for (let i = 0; i < pixels.length; i = i + 4) {
    
    // only do another check if next pixel colour is different
    if (pixels[i] != redVal) {
      redVal = pixels[i];

      if (pixels[i] > 150 ) {
        let x = count % width;
        let y = floor(count/width);
  
        let tempX, tempY;
        for (let j = 0; j < arrX.length; j++) {
          if (dist(x, y, arrX[j], arrY[j]) < 15) {
            tempX = arrX[j];
            tempY = arrY[j];
  
          }
  
        rect(tempX, tempY, 30, 30);
  
        }
  
      }

    
    }


    
    count++;
  }

}





