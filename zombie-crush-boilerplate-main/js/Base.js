class Base {
    constructor(x,y,width,height,color,isStatic){
        var options = {
            isStatic:isStatic
        };
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.h = height
        this.w = width
        this.color = color
        World.add(world,this.body)
    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.w, this.h);
        pop();

        
    }
}