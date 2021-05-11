const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
//empty arrays!
var ground, snow=[];

function preload(){
//background
  backgroundImg = loadImage("snow3.jpg");
}

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //creating Ground
  ground = new Ground(400, 380, 800, 15);

}

function draw() 
{
  //DISPLAYING background
  background(backgroundImg); 
  Engine.update(engine);
  
//each framecound snow falling
  if(frameCount%70==0)
  {                   //random interval
    snow.push(new Snow(random(50, 400), 0, 50, 50));
  }

  //snow!
  for (var i = 0; i<snow.length; i=i+1)
  {
    snow[i].display();
  }
}



