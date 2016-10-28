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
/*draw(context){

       context.arc(100, 100, 5, 0, Math.PI*2, true);
       context.fillStyle = 'green';
       context.beginPath();
       context.fill();
   }*/


moveBall(){
this.x = this.x + 5
this.y = this.y + 5

}

render(context){
context.fillStyle = "red"
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height)

this.moveBall()





}
}