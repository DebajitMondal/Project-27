class Ball{
    constructor(x,y){
        var options = {
           isStatic:true,
            restitution: 0.3,
            friction:0.5,
            density:1.2
          
        }
        this.body = Bodies.circle(x,y,40,options)
        World.add(world,this.body)
        
        
    }

    display() {
        var pos = this.body.position
        push()
        ellipseMode(RADIUS)
        fill("DeepPink")
        ellipse(pos.x,pos.y,40,40)
        pop()
    }

}
