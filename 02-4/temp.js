function setup () {
  createCanvas(300,300);
  pixelDensity(1);
}

function draw () {
  noLoop();
  let arr = [3,4,5,3,3,3,32,222];
  arr.forEach(diff,3);
  console.log(arr);
}

function diff (value, index, arr) {
  console.log(this);
  arr[index] = value - this;
}