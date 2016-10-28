export default class Ball {
constructor(){



  this.width = 50;
  this.height = 50;
  this.ySpeed = Math.floor(Math.random() *12 - 6) //y direction
  this.xSpeed = (7 - Math.abs(this.ySpeed))// x direction
  this.radius = 5
  this.reset();





  }

    reset() {
  this.x = 150
  this.y = 75

}



 /*paddleCollision() {



      const inRightEnd = player2.x <= this.x + this.width &&
      player2.x > this.x - this.vx + this.width;
      if (inRightEnd) {
         const collisionDiff = this.x + this.width - player2.x;
         const k = collisionDiff / this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitRightPaddle = y >= player2.y && y + this.height <=
         player2.y + player2.height;
         if (hitRightPaddle) {
            this.x = player2.x - this.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
}
}
   } else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
         const collisionDiff = player1.x + player1.width - this.x;
         const k = collisionDiff / -this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitLeftPaddle = y >= player1.y && y + this.height <=
         player1.y + player1.height;
         if (hitLeftPaddle) {
            this.x = player1.x + player1.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
         }
      }
    }
}

*/

paddleCollision(player1, player2){
  console.log(`x: ${this.x}, player2.x: ${player2.x}`)
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

if (this.x >=290){

console.log("player 1 goal")
this.reset()


/*this.vx = (-7 - Math.abs(this.vy))*/
}
}

goalLeft(){

if (this.x <=0){

console.log("player 2 goal")
this.reset()

/*this.vx = (-7 - Math.abs(this.vy))*/

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

//this.reset()

/*this.scored()*/
    this.moveBall()






}
}