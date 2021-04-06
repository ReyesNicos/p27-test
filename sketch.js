
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(700,100)
	bobObject1 = new bob(400,300)
	bobObject2 = new bob(550,300)
	bobObject3 = new bob(700,300)
	bobObject4 = new bob(250,300)
	bobObject5 = new bob(100,300)
	rope1=new rope(bobObject1.body,roofObject.body,-150*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display()
  bobObject2.display()




  drawSprites();
 
}



