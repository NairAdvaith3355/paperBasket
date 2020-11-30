const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
  engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,200);
  ground1 = new ground(400,650,1900,10)
  dustbin1 = new dustbin(1050,635,100,15);
  dustbin2 = new dustbin(1000,620,15,50)
  dustbin3 = new dustbin(1100,620,15,50)
  
  

  Engine.run(engine);
  keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  

  

  
  
  drawSprites();
 
}

function keyPressed() {
    if(keyCode === ENTER){
      Matter.Body.applyForce(paper1.body, paper1.body.position,{x:50 , y:-40 })
    }




    }
