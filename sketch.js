const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world
var Paperball1,Paperball2,Paperball3,Paperball4,Paperball5

var Ground1
function preload()
{
	
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    Ground1 = new Ground(360,200,400,30,PI/2)
    Paperball1 = new Ball(200,590)
    Paperball2 = new Ball(280,590)
    Paperball3 = new Ball(360,590)
    Paperball4 = new Ball(440,590)
	Paperball5 = new Ball(520,590)
	

 
    }

function draw(){
    background();

    Engine.update(engine);
    Paperball1.display()
    Paperball2.display()
    Paperball3.display()
    Paperball4.display()
    Paperball5.display()
    Ground1.display()
    
 

}
