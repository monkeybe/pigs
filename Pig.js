class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
display()
{
  if(this.body.speed<2.5){
    super.display();
  }
  else{
    World.remove(world,this.body);
  }
  console.log(this.body.speed)

}


};
