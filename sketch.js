let paddleX1=15;
let paddleY1=250;
let paddleX2=685;
let paddleY2=250;
let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let states=1;
let player1Score=0
let player2Score=0
function setup(){
    createCanvas(700,550);
    text("pong by yourself",350,300,250,250);
}
function draw(){
  text("PONG",350,300,250,250);

  if(states==1){
    background(252, 186, 3)
    fill(255,0,0);
    rect(150,275,100,100);
    fill(255,255,255);
    text("EASY",150,275,100,100)
    fill(0,255,0);
    rect(250,275,100,100);
    fill(255,255,255);
    text("MEDIUM",250,275,100,100);
    fill(0,0,255);
    rect(350,275,100,100);
    fill(255,255,255);
    text("HARD",350,275,100,100);
  }
  if (states==2){
  background(0,110);
  rectMode(CENTER);
  fill(0,0,255);
  rect(paddleX1,paddleY1,10,100);
  fill(255,0,0);
  rect(paddleX2,paddleY2,10,100);
  if (keyIsDown(UP_ARROW)) {  
    paddleY2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    paddleY2 += 10;
  }
  if (keyIsDown(87)) {
    paddleY1 -= 10;
  }
  if (keyIsDown(83)) {
    paddleY1 += 10;
  }
  paddleY1=constrain(paddleY1,50,height-50);
  paddleY2=constrain(paddleY2,50,height-50);

  
movingBall();
displayScores();
  }
}
function mouseClicked(){
  if (mouseX>150 && mouseX<250&& mouseY>275&&mouseY<375){
    states=2;
    xSpeed=random(2,4);
    ySpeed=random(2,4);
}   
  if (mouseX>250 && mouseX<350&& mouseY>275&&mouseY<375){
    states=2;
    xSpeed=random(4,7);
    ySpeed=random(4,7);

} 
  if (mouseX>350 && mouseX<450&& mouseY>275&&mouseY<375){
    states=2;
    xSpeed=random(8,10);
    ySpeed=random(8,10);
} 

}
function movingBall(){
   noStroke();
  fill(random(255),random(255),random(255));
  ellipse(xPos, yPos, 50, 50);
    xPos+=xSpeed;
   yPos+=ySpeed;
if (yPos >= 525 || yPos<=25) {
    ySpeed*=-1;
  }
  if (xPos - 25 <= paddleX1 + 5 && yPos >= paddleY1 - 50 && yPos <= paddleY1 + 50) {
    xSpeed *= -1;
  }
  if (xPos + 25 >= paddleX2 - 5 && yPos >= paddleY2 - 50 && yPos <= paddleY2 + 50) {
    xSpeed *= -1;
  }  
if (xPos - 25 <= 0) {
  player2Score++;
  resetBall();
} else if (xPos + 25 >= width) {
  player1Score++;
  resetBall();
}
}

function displayScores() {
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text(player1Score, width / 4, 50);
  text(player2Score, width * 3 / 4, 50);
}
function resetBall() {
  xPos = width / 2;
  yPos = height / 2;
  xSpeed = random(7, 5) * (random() > 0.5 ? 1 : -1);
  ySpeed = random(7, 5) * (random() > 0.5 ? 1 : -1);
}
