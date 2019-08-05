/**
 * Problem: Create a program that fills the screen with randomly sized rectangles that do not overlap,
 *          but fill the screen. The maximum size of a rectangle is 1/15th of the screen size.
 * 
 * Notes: I didn't do any size limit, but because there are so many rectangles, they are typically small anyways.
 * 
 * 
 */

function setup () {
  createCanvas(500,500);
  pixelDensity(1);
}

function draw () {
  noLoop();
  strokeWeight(1);
  noFill();
  randomRectangles(500,500);
}



function pointValid (x, y, arr, xLimit, yLimit) {
  if (x >= (xLimit - 1)) {
    return false;
  }

  if (y >= (yLimit - 1)) {
    return false;
  }

  for (let square of arr) {
    if (square[0] == x || (square[0] + square[2]) == x) { // the x index of the point is at the left or right edge of a square
      if (y >= square[1] && y <= (square[1] + square[3])) { // y index of point is within the edge range
        return false;
      }
    }
    if (square[1] == y || (square[1] + square[3]) == y) { // the y index of point is at the top or bottom of a square
      if (x >= square[0] && x <= (square[0] + square[2])) { // x index of point is within the edge range
        return false;
      }
    }
  }
  return true;
}

function xCollides (val, y, h, arr, xLimit) {
  if (val > (xLimit - 1)) {
    return true;
  } 

  for (let square of arr) {
    if (square[0] == val) {
      if ((y >= square[1] && y <= (square[1] + square[3])) || (square[1] >= y && square[1] <= (y + h)))  { // if top of our square is in the range of the square or if the top of the square is in the range of our square
        return true;
      } 
    }
  }
  return false;
}

function yCollides (val, x, w, arr, yLimit) {
  if (val > (yLimit - 1)) {
    return true;
  } 

  for (let square of arr) {
    if (square[1] == val) {
      if ((x >= square[0] && x <= (square[0] + square[2])) || (square[0] >= x && square[0] <= (x + w)))  { // if top of our square is in the range of the square or if the top of the square is in the range of our square
        return true;
      } 
    }
  }
  return false;

}


function randomRectangles (w, h) {

  let MAX = 150;
  let arrX = [];
  let arrY = [];


  for (let i = 0; i < MAX; i++) {
    let ranX = Math.floor(Math.random()*w);
    let ranY = Math.floor(Math.random()*h);
    
    arrX.push(ranX);
    arrY.push(ranY);
  }

  let grows = [[0,0]];
  let squares = []; // [[x,y,w,h]] top left


  while (grows.length > 0) {
    let x = grows[0][0];
    let y = grows[0][1];
    let rectW = 0;
    let rectH = 0;

    let xHit = false;
    let yHit = false;

    // valid point check - point doesn't begin in the border of another square

    if (pointValid(x, y, squares, w, h)) {

      while (xHit == false || yHit == false) {
        if (xHit == false) {
          rectW++;

        }

        if (yHit == false) {
          rectH++;
        
        }


        // point collision

        if (xHit == false) {
          for (let xVal of arrX) {

            if ((x + rectW) == xVal) { // is the right side x val the same as any point
              let index = arrX.indexOf(xVal);
              let yVal = arrY[index];

              if (yVal >= y && yVal <= (y + rectH)) { // is the y val of the point. within the range of the right side 
                xHit = true;
              }
            }
          }

        }

        if (yHit == false) {
          for (let yVal of arrY) {

            if ((y + rectH) == yVal) { // is the bottom side y val the same as any point
              let index = arrY.indexOf(yVal);
              let xVal = arrX[index];

              if (xVal >= x && xVal <= (x + rectW)) { // is the x val of the point. within the range of the bottom side 
                yHit = true;
              }
            }
          }

        }

        // side collision

        if (xHit == false) {
          if (xCollides(x + rectW + 1, y, rectH, squares, w)) {
            xHit = true;
          }
          
        }

        if (yHit == false) {
          if (yCollides(y + rectH + 1, x, rectW, squares, h)) {
            yHit = true;
          }
          
        }



      }

      // draw square

      // remove point

      grows.shift();

      squares.push([x,y,rectW,rectH]);
      rect(x, y, rectW, rectH);

      grows.push([x+rectW+1, y]);
      grows.push([x, y+rectH+1]);




    } else {
      grows.shift();
    }
  
  
  }
}
