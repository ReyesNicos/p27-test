class bob {
    constructor(x,y){
    
      var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2,
    }
    this.body= Bodies.circle(x,y,50,options);
    this.width=150;
    this.height=150;
    World.add(world,this.body);

    }
    display(){
    
    var pos=this.body.position;
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    strokeWeight(4);
    stroke("black");
    fill("white");
 
    pop();
    }
}