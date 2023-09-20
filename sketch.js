var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var powerupgroup
var bombgroup

function preload(){
  pathImg = loadImage("path.png");
  bombImg = loadImage("bomb.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  powerupImg = loadAnimation("power.png", "energyDrink.png")
}
function bomber() {
  if(frameCount % 600 === 0){
    bomb = createSprite(Math.round(random(30, 370)), 0, 10, 10)
    bomb.scale = 0.08
    bomb.addAnimation("bombImg", bombImg)
    bombgroup.add(bomb);  
  }
 }

 function puper() {
  if(frameCount % 300 === 0){
    pu = createSprite(Math.round(random(30, 370)), 0, 10, 10)
    pu.scale = 0.08
    pu.addAnimation("pwrupImg", powerupImg)
    powerupgroup.add(pu);
  }
 }
function setup(){
  
  createCanvas(400,400);
  bombgroup = new Group();
  powerupgroup = new Group();
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);


// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//leftBoundary.invisible = false;
//leftBoundary.visible = true;
//leftBoundary.isvisible = false;
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  bombgroup.setVelocityYEach(5);
  powerupgroup.setVelocityYEach(5);
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  bomber()
  puper()

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
