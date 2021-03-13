class Ball{
    constructor(x,y,r){
        var options = {
        'isStatic':false,
        'restitution': 0.8,
         'density':1.0,
         'friction':0
        }  
        
       this.r = r;
       this.x = x;
       this.y =y;
       this.image = loadImage("paper.png");
     
        this.body= Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
     }
     display(){
      var pos = this.body.position;
      push()
     //fill("blue");     
      translate(pos.x,pos.y);
     imageMode(CENTER);
    
    image(this.image,0,0,this.r,this.r);
    this.image.debug = true;
     pop();

   } 
}