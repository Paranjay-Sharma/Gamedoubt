const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;  
var bg
var engine,world;

function preload(){
bg=loadImage("court.png");

}

function setup(){
createCanvas(600,500);
 engine=Engine.create();
world=engine.world;
ball=new Ball(170,-70,-20);
rope=new Rope(ball.body,{x:540,y:260});
Hook=new hook(220,230); 

}
function draw(){    
background(bg);

Engine.update(engine);

rope.display();
ball.display();
Hook.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
    }

    function mouseReleased(){
        rope.fly();
    }








