
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var ground,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5,base
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,690,800,20);
	base=new Ground(400,200,200,20);
	b1=new Ball (400,400,30,30);
	c1=new Chain(b1.body,base.body,0);
	b2=new Ball (410,400,30,30);
	c2=new Chain(b2.body,base.body,0);
	b3=new Ball (420,400,30,30);
	c3=new Chain(b3.body,base.body,0);
	b4=new Ball (390,400,30,30);
	c4=new Chain(b4.body,base.body,0);
	b5=new Ball (380,400,30,30);
	c5=new Chain(b5.body,base.body,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ground.display();
  base.display();
  b1.display();
  c1.display();
  b2 . display();
  b3 . display();
  b4 . display();
  b5 . display();
  c2 . display();
  c4 . display();
  c5 . display();
  c3 . display();
 
}



