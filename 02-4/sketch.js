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
  console.log("something");
  triangles(300,300);

}

function xCollide (val, y, h, arr) {
  if (arr.length == 0) {
    return false;
  }

  for (let arrs of arr) {
    if (arrs[0] == val) {
      if (y <= (arrs[1] + arrs[3]) || (y + h) >= arrs[1]) {
        return true;
      } 
    }

  }
  return false;
}


function yCollide (val, x, w, arr) {
  if (arr.length == 0) {
    return false;
  }

  for (let arrs of arr) {
    if (arrs[1] == val) {
      if (x <= (arrs[0] + arrs[2]) || (x + w) >= arrs[0]) {
        return true;
      } 
    }
  }
  return false;

}


function triangles (w, h) {

  let Max = floor(random(8,12));
  let arrX = [];
  let arrY = [];

  strokeWeight(3);
  for (let i = 0; i < Max; i++) {
    let ranX = floor(random(0,w+1));
    let ranY = floor(random(0,h+1));
    
    point(ranX, ranY);
    arrX.push(ranX);
    arrY.push(ranY);
  }
  console.log(arrX);

  let grows = [[0,0]];
  let squares = []; // [[x,y,w,h]] top left
  strokeWeight(1);
  noFill();

  console.log("yes");
  while (grows.length > 0) {
    let x = grows[0][0];
    let y = grows[0][1];
    let rectW = 0;
    let rectH = 0;

    let xHit = false;
    let xCollided = false;
    let yCollided = false;
    let yHit = false;

    while (xHit == false || yHit == false) {

      if (xHit == false) {
        rectW++;
      } else {
        if (rectW == 1) {
          return;
        }
      }


      if (yHit == false) {
        rectH++;

        for (let pY of arrY) {
          if (pY == y) {
            let index = arrY.indexOf(pY);
            let pX = arrX[index];
            if (pX >= x && pX <= (x + rectW)){
              yHit = true;
            }
          }
        }
      } else {
        if (rectH == 1) {
          return;
        }
      }

      if (xHit == false) {
        for (let pX of arrX) {
          if (pX == x) {
            let index = arrX.indexOf(pX);
            let pY = arrY[index];
            if (pY >= y && pY <= (y + rectH)){
              xHit = true;
            }
          }
        }
      }

      if (xHit == false) {
        if(xCollide(x + rectW, y, rectH, squares)) {
          xHit = true;
          xCollided = true;
        }
      }

      if (yHit == false) {
        if(yCollide(y + rectH, x, rectW, squares)) {
          yHit = true;
          yCollided = true;
        }
      }

      if ((x + rectW) == (w - 1)) {
        xHit = true;
      }

      if ((y + rectH) == (h - 1)) {
        yHit == true;
      }

    }

    // now add the right and left points to grow
    grows.shift();
    console.log("length is " + grows.length);

    if (rectH != 1 && rectW != 1) {
      console.log(x,y,rectW,rectH);
      
      //rectH(x,y,rectW,rectH);
      
      if (!xCollided) {
        if ((x + rectW) < (w - 1)) {
          grows.push([x + rectW + 1, y]);
        }
      }

      if (!yCollided) {
        if ((y + rectH) < (h -1)) {
          grows.push([x, y + rectH + 1])
        }
      }
      

      
    }
  }






}