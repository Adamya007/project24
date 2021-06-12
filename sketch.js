const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1,iron1,iron2,iron3,stone1,rubber1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
   hammer1 = new Hammer(200,100,150,30);
    iron1 = new Iron(300,300,20,20);
    iron2 = new Iron(350,300,10,30);
    iron3 = new Iron(400,300,30,20);
    stone1 = new Stone(600,150,50,50);
    rubber1 = new Rubber(300,150,40);
  


};

function draw(){

    background("lightBlue");
    Engine.update(engine);
 
    
    stone1.display();
    plane.display();
    hammer1.display();
    iron1.display();
    iron2.display();
    iron3.display();
    rubber1.display();

   
 
};