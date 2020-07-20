class Paper extends Basa {
  constructor(x,y,radius){
    super(x,y,70);
    this.image=loadImage("images/ball.png");
  }
 display(){
 this.body.position.x = mouseX;
 this.body.position.y = mouseY;
   super.display();
   
 }
  
}