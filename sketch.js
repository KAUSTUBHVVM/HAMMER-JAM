const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var r1,r2,r3,r4,r5,r6,r7,r8;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    r1 = new Rubber(600,300,2);
    r2 = new Rubber(600,300,2);
    r3 = new Rubber(600,300,2);
    r4 = new Rubber(600,300,2);
    r5 = new Rubber(600,300,2);
    r6 = new Rubber(600,300,2);
    r7 = new Rubber(600,300,2);
    r8 = new Rubber(600,300,2);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    
 
}