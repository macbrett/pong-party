export default class Ball {
constructor(){

  //this.player1 = player1
  //this.player2 = player2
  this.width = 50;
  this.height = 50;
  this.ySpeed = Math.floor(Math.random() *12 - 6) //y direction
  this.xSpeed = (7 - Math.abs(this.ySpeed))// x direction
  this.radius = 5
  this.player1score = 0
  this.player2score = 0
  this.reset();


}

reset() {
this.x = 150
this.y = 75

}

paddleCollision(player1, player2){

  if (
    this.x - this.radius <= player1.x + player1.width &&
    this.y <= player1.y + player1.height &&
    this.y >= player1.y
  ){
  this.xSpeed *= -1

} else if (
    this.x + this.radius >= player2.x &&
    this.y <= player2.y + player2.height &&
    this.y >= player2.y
  ){
    this.xSpeed *= -1
  }
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
  this.ySpeed *= -1
}

if (this.x <=0 || this.x>=300 - this.radius){
this.xSpeed *= -1
  }
}

goalRight(){
if (this.x >=295){

this.reset()
  }
}

goalLeft(){
if (this.x <=2){

this.reset()

  }
}

playerOneScores(){


if (this.x >=290){
this.player1score++
console.log(this.player1score)

  }
}

playerTwoScores(){

if (this.x <=10){
  this.player2score++
console.log(this.player2score)
  }
}


moveBall(){
this.x += this.xSpeed
this.y += this.ySpeed

}

render(context, player1, player2){

    this.draw(context)
     this.paddleCollision(player1, player2);
    this.bounce()
     this.goalRight()
    this.goalLeft()
    this.playerOneScores()
    this.playerTwoScores()

this.moveBall()

}
}