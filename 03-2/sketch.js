/**
 * Problem: Generate 4 different-coloured rectangles that have one of their points meet at mouseX, mouseY. 
 *          Have the areas of all 4 rectangles display on the screen. 
 *          Use a function to calculate the area and return that information to the text() function.
 * 
 * Notes: 
 * 
 * 
 */


let arrX;
let arrY;
let colours = ['#4cb55f','#4ca5b5','#b54ca2','#b54c4e'];

function setup () {
  createCanvas(500,500);
  pixelDensity(1);
  rectMode(CORNERS);
  stroke(2);
  textSize(20);
  arrX = [0, width - 1, 0, width - 1];
  arrY = [0, 0, height - 1, height - 1];

}


function draw () {
  background(255);
  mouseRect();
}

function mouseRect () {
  let texts = [];
  
  for (let i = 0; i < 4; i++) {
    fill(colours[i]);
    let x = arrX[i];
    let y = arrY[i];

    rect(x, y, mouseX, mouseY);

    texts.push("Area #" + (i+1) + ": " + area(x, y, mouseX, mouseY));    
  }


  noFill();
  for (let i = 0; i < 4; i++) {
    text(texts[i], 20, 20*(i + 1) )
  }

}

function area (x1, y1, x2, y2) {
  return (Math.abs(x1 - x2) + 1)*(Math.abs(y1 - y2) + 1);
}