


export default class ScoreBoard {


   constructor(player1score, player2score) {
     this.x = 20
     this.y = 20

   }





   draw(context) {
      context.fillStyle = 'red';
      context.font = "20px Helvetica";
      context.fillText("Player 1: " + this.player1score, this.x, this.y);
      context.fillText("Player 2: " + this.player2score, this.x + 160, this.y);
   }


render(context,player1, player2){

this.draw(context)



//this.scoreBall(player1,player2)

}

}