class paper {
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0.5,
    gravity:1

}

this.x = x
this.y = y
this.r = 30;
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world, this.body);


}
display(){

    var paperPos = this.body.position;
    
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    strokeWeight(3);
    fill("pink");
    ellipse(0,0,this.r,this.r)
    pop();







}


}