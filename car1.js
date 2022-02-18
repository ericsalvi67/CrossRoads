// Car Config
let xcar = [900, 900,900];
let ycar = [65, 150, 230];
let speedcar = [2, 2.5, 3.3];
let wcar = 60;
let hcar = 50;


// Car code
function showcar(){
  for(let i = 0; i < car.length; i = i + 1){
    image(car[i], xcar[i], ycar[i], wcar, hcar); 
  } 
}

function movecar(){
  for (let i = 0; i < car.length; i = i + 1){
    xcar[i] -= speedcar[i];
  }
}


function restartcar(){
  for (let i = 0; i < car.length; i = i + 1){
    if (verifycar(xcar[i])){
     xcar[i] = 900;
    }
  }
}

function verifycar(xcar){
  return xcar < -50;
}
  


