
var trex ,trex_running;
var ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(50,180,20,20);
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(300,195,700,5);
  //create a trex sprite
 
}

function draw(){
  background("black")
  
  if (keyDown("space")){
    trex.velocityY=-8
   }

    trex.velocityY=trex.velocityY+0.7;
   trex.collide(ground);
   drawSprites();
}
