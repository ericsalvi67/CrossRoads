
function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(road);
  showcow(xcow, ycow);
  movecow();
  showcar();
  movecar();
  restartcar();
  verifycollide();
}



