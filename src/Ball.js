export default class Ball {
constructor(boardWidth,boardHeight){
  this.x = 50
  this.y = 50
  this.vx = 1
  this.vy = 1
  this.width = 25;
  this.height = 25;
  this.xSpeed = (7 - Math.abs(this.vy))// x direction
  this.ySpeed = Math.floor(Math.random() *12 - 6) //y direction


  }
draw(context){
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

   }


moveBall(){
this.x = this.x + 5
this.y = this.y + 5

}

render(context){

    this.draw(context)
    this.moveBall()






}
}