/**
 * Problem: Create a program that draws between 80 and 120 points (randomly chosen) to the screen.
 * Have the program connect the dots using lines; however, you can only generate non-overlapping triangles.
 * 
 * Notes: Uses Delaunay Triangulation. The program is slow.
 * 
 * 
 */

function setup () {
  createCanvas(800,800);
  pixelDensity(1);
}

function draw () {
  noLoop();
  strokeWeight(1);
  triangles();

}



function triangles () {

  let MAX = Math.random()*20 + 100;
  let arrX = [];
  let arrY = [];

  for (let i = 0; i < MAX; i++) {
    let ranX = Math.floor(Math.random()*width);
    let ranY = Math.floor(Math.random()*height);
    
    arrX.push(ranX);
    arrY.push(ranY);
  }

  let len = arrX.length;
  




  let squares = "";
  stroke("#a8324e");
  strokeWeight(1);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {


      let lowest1 = width + height;
      let lowest2 = width + height;
      
      x1 = 0;
      x2 = 0;
      y1 = 0;
      y2 = 0;

      for (let k = 0; k < len; k++) {
        x = arrX[k];
        y = arrY[k];

        let d = Math.floor(dist(j,i,x,y));
        
        if (d <= lowest1) { // if the distance at this point is lower than the lowest, add it to the ranking as 1, move 1 to 2
          x2 = x1;
          y2 = y1;
          x1 = x;
          y1 = y;
          
          lowest2 = lowest1;
          lowest1 = d;
        }

      }

      if ((lowest2 - lowest1) <= 1) { // if 2 lowest distance points are very close (<=1 magnitude apart), draw a point there
        
        // uncomment the following to see the voronoi graph 
        //stroke('#3258a8');
        //point(j, i);
        //stroke("#a8324e");
        
        // as a string "x1 y1 x2 y2,"
        let newSquare = "" + x1 + " " + y1 + " " + x2 + " " + y2;
        if (!squares.includes(newSquare)) {
          squares = squares + newSquare + ",";
          line(x1, y1, x2, y2);
        }
        
      }

    }
  }
}