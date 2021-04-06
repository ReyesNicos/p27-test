class rope{
    constructor(body1,body2,offsetX, offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
      var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY}
      }
      this.rope=constraint.create(options)
      World.add(world,this.rope)
      
      
    }
    display(){
      var pointA=this.rope.bodyA.position
      var pointB=this.rope.bodyB.position
      strokeWeight(3)
      line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}