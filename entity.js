// Cow config
let xcow = 450;
let ycow = 555;
let collide = false;

// Gamecode
function showcow(x, y){
  image(cow, x, y, 35, 35);
}

function movecow(){
  if(keyIsDown(UP_ARROW)){
    ycow -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    ycow += 3;
  }
    if (keyIsDown(LEFT_ARROW)){
    xcow -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xcow += 3;
  }
}

function verifycollide(){
 for (let i = 0; i < car.length; i = i + 1){
   collide = collideRectCircle(xcar[i], ycar[i], wcar, hcar, xcow, ycow, 30);
     if (collide){
       collision ();
  }
 }
}

function collision(){
  ycow = 555;
}


