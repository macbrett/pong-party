


export default class ScoreBoard {


   constructor(player1, player2) {
     this.x = 20
     this.y = 20

     this.player1 = player1
      this.player2 = player2
      this.player1score = 0
      this.player2score = 0
   }




   draw(context) {
      context.fillStyle = 'white';
      context.font = "20px Helvetica";
      context.fillText("Player 1: " + this.player1score, this.x, this.y);
      context.fillText("Player 2: " + this.player2score, this.x + 160, this.y);
   }


/*scoreBall(player1, player2){
if (this.x <=2){
console.log("gree")
}else if(
this.x >=295){
console.log("hi")
}
}*/


render(context,player1, player2){
console.log("hope")
this.draw(context)
//this.scoreBall(player1,player2)

}

}