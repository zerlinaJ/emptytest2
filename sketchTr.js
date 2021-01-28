const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log2 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new Log(800,120,150, PI/7);
    log4 = new Log(820,120,150, -PI/7);

    constrainedLog = new Log(230,180,100,PI/2);
    bird = new Bird(100,100);

    var options = {
        bodyA: bird.body,
        bodyB: constrainedLog.body,
        stiffness:1.0,
        length:20
    }

    var chain = Constraint.create(options);
    World.add(world,chain);

}

function draw(){
    background(0);
    Engine.update(engine);
 //   console.log(box2.body.position.x);
 //   console.log(box2.body.position.y);
//    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    constrainedLog.display();
    
    bird.display();

    strokeWeight(3)
    line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y)
}