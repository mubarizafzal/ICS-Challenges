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

function arrDiff (value, index, arr) {
  arr[index] = value - this;
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
  // comeback to itself in 2 points, no points within area of triangle
  // find nearest point
  // quadtree

  // create by nearest
  while (arrX.length > 0) {
    // take a point
    let x = arrX[0];
    let y = arrY[0];

    let tempX = arrX.slice(1);
    let tempY = arrY.slice(1);
    // find a nearest

    // diff of x values in arr, diff of y values in arr, add x arr and y arr, find pos of smallest val
    tempX.forEach(arrDiff,x);


    // connect to another nearest

    // connect back

    // remove 3 from arr - actually no

    // creat triangle obj


  }






}