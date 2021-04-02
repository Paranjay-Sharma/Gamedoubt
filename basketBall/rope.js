class Rope{
constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
stiffness: 0.04,
length:40
    }
    this.pointB=pointB
this.rope=Matter.Constraint.create(options);
World.add(world,this.rope);
}
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.pointB;
    push(); 
    strokeWeight(3);
    stroke("orange");
line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();
}

fly(){
push();
    this.rope.bodyA = null;
pop();
}
}
