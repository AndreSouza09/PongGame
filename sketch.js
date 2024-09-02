let xplayer = 20;
let yplayer = 150;
let xbot = 570;
let ybot = 150;
let vbot = 4;
let xball = 300;
let yball = 200;
let spdV_Ball = 8;
let spdH_Ball = 8;
let pontosPlayer = 0;
let pontosBot = 0;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  rect (298, 0, 3, 400)
  rect (xplayer, yplayer, 10, 100);
  rect (xbot, ybot, 10, 100);
  circle(xball, yball, 25)
  move();
  ball();
  colisao();
  yplayerS = yplayer + 100;
  
  textAlign(CENTER);
  textSize(50);
  fill(255)
  text(pontosPlayer, 250, 50);
  text(pontosBot, 350, 50)
}

function move() {
     if (key === "w" && keyIsPressed === true ) {
      yplayer -= 6;
    } 
    else if (key === "s" && keyIsPressed === true) {
      yplayer += 6;
    }
}
 
  
//  bot
  ybot += vbot;
  
  if (ybot > height - 100 || ybot < 0) {
    vbot *= -1;

}
  
function ball(){

  xball += spdH_Ball;
  yball += spdV_Ball;
  
  if (xball > width - 25 || xball < 0) {
    spdH_Ball *= -1;
    
  }
  if (yball > height || yball < 0) {
    spdV_Ball *= -1;
    
  }

}

function colisao(){

  if (xball + 5 < xplayer + 30 && yball > yplayer  && yball  < yplayer + 100) {
    spdH_Ball = 8;
  
  } else  if (xball < 0){
    pontosBot ++;
    spdH_Ball = 8;
  }
  
  //bot
  if (xball - 5 > xbot - 30 && yball > ybot && yball  < ybot + 100) {
    spdH_Ball = -8;

  } else if (xball > width-25){
    pontosPlayer ++;
    spdH_Ball = -8;
  }
  
}