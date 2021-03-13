
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bl,b2,b3, ball, world,engine,gameState;
var dustbinImg, dustbin;
function preload()
{
	dustbinImg = loadImage("dustblue.png");
 
}
function setup() {
	createCanvas(800, 470);
  rectMode(CENTER);
gameState = "start";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,90)
b1 = new Box(650,420,150,20);
b2 = new Box(570,350,20,130);
b3 = new Box(720,350,20,130);
ball = new Ball(50,450,40);
dustbin = createSprite(650,305);
dustbin.addImage(dustbinImg);
dustbin.scale= 0.5;
	Engine.run(engine);
  
}


function draw() {
  if(gameState === "start"){
    
    background("black");
    textSize(30);
    fill("red");
   
    text("Throw waste in the justbin ",50,200);
    textSize(25);
    fill("yellow");
   
    text("Press up arrow to start and throw trash in dustbin",50,230);

    if(keyCode ===UP_ARROW){
      gameState = "play"
    }
  }
  if(gameState ==="play"){
    rectMode(CENTER);
    background("lightblue");
    ground.display();
    
    b1.display();
    b2.display();
    b3.display();
    
    ball.display();
    console.log(ball.y)
    dustbin.display();
   }
  }
 

function keyPressed(){
  if(keyCode === UP_ARROW && gameState === "play"){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:209,y:-209});
  }
}



