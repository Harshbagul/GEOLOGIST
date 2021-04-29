class Iron{
  constructor(x,y){
    var options = {
    'density': 30,
    'friction' : 3,
    'restitution':0.8
    };
 
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 200;
    this.height = 80;
    World.add(world, this.body);
  };

  display(){
  var pos = this.body.position
  var angle = this.body.angle
  push();
  translate(pos.x,pos.y)
  rotate(angle)
  fill("blue");
  rectMode(CENTER)
  rect(0,0,this.weight,this.height)
  pop();
 };
};