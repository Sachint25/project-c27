class bob{

    constructor(x,y,radius){
        var option = {
          isStatic: false,
          restitution: 1.1,
          friction: 2,
          density: 1  
        }
        
        this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);
        this.radius = radius;


    }

    display(){
        push();
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius);
        pop();
    }
}