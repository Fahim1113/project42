var issImg, spaceImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var iss, spacecraft;
var hasDocked=false;
function preload(){
  issImg=loadImage("iss.png");
  spaceImg=loadImage("spacebg.jpg");
  spacecraft1Img=loadImage("spacecraft1.png");
  spacecraft2Img=loadImage("spacecraft2.png");
  spacecraft3Img=loadImage("spacecraft3.png");
  spacecraft4Img=loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  
  iss=createSprite(400, 250, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.8;
  iss.debug=true;
  iss.setCollider("rectangle",-60,10,30,10)

  spacecraft=createSprite(20,370);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.15;

}

function draw() {
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img);
      spacecraft.y=spacecraft.y+5;
    }
    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft1Img);
      spacecraft.y=spacecraft.y-5;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x=spacecraft.x+5;
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x=spacecraft.x-5;
    }
  } 
  if(spacecraft.isTouching(iss)){
    hasDocked=true;
  }
  if(hasDocked){
    textSize(30);
    stroke("black")
    text("Docking Successful!",300,350)
  }
  background(spaceImg); 
  drawSprites();

}