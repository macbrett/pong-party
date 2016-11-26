export default class ball {
constructor(){

  //this.player1 = player1
  //this.player2 = player2
  this.width = 50;
  this.height = 50;
  this.ySpeed = Math.floor(Math.random() *12 - 3) //y direction
  this.xSpeed = (3 - Math.abs(this.ySpeed))// x direction
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
              var audio = new Audio('sounds/trump.mp3');
              audio.play();

  } else if (
    this.x + this.radius >= player2.x &&
    this.y <= player2.y + player2.height &&
    this.y >= player2.y
            ){
              this.xSpeed *= -1
              var audio = new Audio('sounds/trump.mp3');
              audio.play();
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
      var audio = new Audio('sounds/pong-01.wav');
      audio.play();
    }

  if (this.x <=0 || this.x>=300 - this.radius){
      this.xSpeed *= -1
      var audio = new Audio('sounds/pong-01.wav');
      audio.play();
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

playerOneScores(player1score){

if (this.x >=290){
this.player1score++
document.getElementById("p1score").innerHTML = this.player1score
let hi = document.getElementById("p1score").innerHTML;
    var audio = new Audio('sounds/good.wav');
  audio.play();

  }
}

playerTwoScores(player2score){

if (this.x <=10){
  this.player2score++
document.getElementById("p2score").innerHTML = this.player2score
let hi = document.getElementById("p2score").innerHTML;
    var audio = new Audio('sounds/good.wav');
  audio.play();

  }
}


moveBall(){
this.x += this.xSpeed
this.y += this.ySpeed

}

render(context, player1, player2, player1score, player2score){

    this.draw(context)
    this.paddleCollision(player1, player2);
    this.bounce()
    this.goalRight()
    this.goalLeft()
    this.playerOneScores(player1score)
    this.playerTwoScores(player2score)
    this.moveBall()

}
}