class Stone {
  constructor(x,y){
    var options = {
     'restitution' :0.8,
     'friction' :0.9,
     'density':12
    };

   this.bodies = Bodies.rect(x, y, 90, 90, options) 
   this.weight = 150
   this.heigth = 50
   World.add(world, this.body);
  };
  
  display(){
   var pos = this.body.position
   var angle = this.body.position
   push();
   translate(pos.x,pos.y)
   rotate(angle)
   fill("black")
   rectMode(CENTER)
   rect(0, 0, this.width, this.height)
   pop();
  };

};