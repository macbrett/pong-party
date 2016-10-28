export default class Ball {
constructor(){

  this.x = 150
  this.y = 75

  this.width = 25;
  this.height = 25;
  this.ySpeed = Math.floor(Math.random() *12 - 6) //y direction
  this.xSpeed = (7 - Math.abs(this.ySpeed))// x direction
  this.radius = 5



  }
draw(context){
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

   }

bounce(){
if (this.y <=0  || this.y >=150 - this.radius){
  this.ySpeed*= -1
}

if (this.x <=0 || this.x>=300 - this.radius){
this.xSpeed *= -1
}
}



moveBall(){
this.x += this.xSpeed
this.y += this.ySpeed

}

render(context){

    this.draw(context)
    this.bounce()
    this.moveBall()



}
}