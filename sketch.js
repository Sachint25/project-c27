
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(400,100,400,10);

	bob1 = new bob(400,300,25);
	bob2 = new bob(450,300,25);
	bob3 = new bob(500,300,25);
	bob4 = new bob(350,300,25);
  bob5 = new bob(300,300,25);
  
  rope1 = new rope(bob1.body, roof1.body, 0, 0);
  rope2 = new rope(bob2.body, roof1.body, 25*2, 0);
  rope3 = new rope(bob3.body, roof1.body, 50*2, 0);
  rope4 = new rope(bob4.body, roof1.body, -25*2, 0);
  rope5 = new rope(bob5.body, roof1.body, -50*2, 0);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  bob4.display();
  bob5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  
  roof1.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-85, y: -65});
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:85, y: -65});
  }
}


