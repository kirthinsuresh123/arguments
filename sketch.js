var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400, 200, 50, 100);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400,100,100,50);
  movingrect.shapeColor = "blue";
}

function draw() {
  background("black");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor = "white";
    fixedrect.shapeColor = "white";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "blue";
  }
  
  drawSprites();
}
