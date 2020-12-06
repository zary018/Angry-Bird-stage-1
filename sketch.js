const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(700,370,70,70);
    box2 = new Box(920,370,70,70);
    pig1 = new Pig(810,380);
    log1 = new Log(810,350,300,PI/2);
    
    box3 = new Box(700,300,70,70);
    box4 = new Box(920,300,70,70)
    pig2 = new Pig(810,320);
    log2 = new Log(810,280,300,PI/2 );

    box5 = new Box(810,230,70,70);
    log3 = new Log(750,200,150,PI/7);
    log4 = new Log(860,200,150,-PI/7);

    bird = new Bird(100,100);
    }

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    
}