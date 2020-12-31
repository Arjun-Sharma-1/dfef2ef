class Chain {
    constructor (bodyA,bodyB,pointB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:pointB,y:0},
            length:2,
            stiffness:0.1
            
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
        this.pointB=pointB
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position

        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x-this.pointB,pointB.y);
    }
}