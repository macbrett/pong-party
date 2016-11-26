


export default class Scoreboard {


   constructor(player1score, player2score) {
     this.x = 30
     this.y = 20

   }





   draw(context) {
      context.fillStyle = 'red';
      context.font = "14px Helvetica";
      context.fillText("Player 1 " , this.x, this.y);
      context.fillText("Player 2 " , this.x + 180, this.y);
   }


render(context,player1, player2){

this.draw(context)



//this.scoreBall(player1,player2)

}

}