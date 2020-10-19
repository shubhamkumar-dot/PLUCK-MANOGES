
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy;
var stone;
var chain;
var mango;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree();

	ground1 = new Ground(400,height,1200,20);
	ground2 =  new Ground(0,350,10,1200);

	boy = new Boy();

	stone = new Stone(100,550,50,50);

	chain = new Chain(stone.body,{x:100,y:600});

	mango = new Mango(600,300,1000,1000);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  tree.display();

  ground1.display();
  ground2.display();

  boy.display();

  stone.display();

  mango.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}