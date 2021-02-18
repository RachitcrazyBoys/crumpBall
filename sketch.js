
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

	paper1 = new Ball(100, 100, 50);
	ground1 = new Ground(400,680,800,20);
	dustbin1 = new Box(650, 610, 150, 20);
	dustbin2 = new Box(450, 610, 150, 20);
	dustbin3 = new Box(550, 675, 20, 180);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine);
   paper1.display();
	ground1.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 200, y: -250 });
	
	}
}

