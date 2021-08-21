class Stone{
    constructor(x,y,radius){
        var options = {
            restitution:1.7
        };
        this.body = Bodies.circle(x,y,radius,options)
        this.r = radius
        World.add(world,this.body)
    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0, 0, this.r,this.r);
        noStroke();
        pop();
}
}