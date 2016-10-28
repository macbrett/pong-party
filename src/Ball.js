export default class Ball {
constructor(x,y,vx,vy){
  this.x = 50
  this.y = 50
  this.vx = 10
  this.vy = 10
  this.width = 25;
    this.height = 25;
  /*this.speed = 5*/
  }


render(context){
context.fillStyle = "red"
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height


)
}
}