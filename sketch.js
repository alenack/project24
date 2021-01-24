
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer1;
var stone1;
var circle;
var sand1;
var sand2;
var sand3, sand4, sand5, sand6, sand7, sand8;
var iron1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	hammer1 = new hammer(700,330,100,30);
	ground = new Ground(600,height,1200,20);
  stone1 = new stone(430,330,70,70);
  circle = new rubber(550, 46, 75);
  sand1 = new sand(150, 200, 55);
  sand2 = new sand(151, 200, 55);
  sand3 = new sand(152, 200, 55);
  sand4 = new sand(153, 200, 55);
  iron1 = new iron (400,330,50,50)
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  hammer1.display();
  ground.display();
  stone1.display();
  circle.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron1.display();
  drawSprites();
 
}



