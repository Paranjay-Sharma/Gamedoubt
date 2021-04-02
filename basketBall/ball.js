class Ball{
constructor(x,y,r){

var options={
    density:5.0,
    frictionAir:0.5,
    restituion:5.0
}
this.image=loadImage("ball.png");
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.body);

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);

ellipseMode(CENTER);
image(this.image,this.r,this.r);
pop();

}
}