var fixedRect, movingRect;
var box1, box2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  
  box1 = createSprite(600, 200, 50, 80);
  box1.shapeColor = "orange";

  box2 = createSprite(600, 400, 50, 80);
  box2.shapeColor = "gray";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1.velocityY = +5;
  box2.velocityY = -5
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 bounceOff(box1,box2) 
  drawSprites();
}

