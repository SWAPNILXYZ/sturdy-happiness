var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Dustbin(700,200,90,100);
	ground = new Ground(400,500,width,10);

	paper = new Paper(100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("sky");
  box.display();
 // box1.display();
  //box2.display();
  ground.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-6});
	}
}

