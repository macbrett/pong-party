import Paddle from './paddle'
import {player1Keys, player2Keys} from './keys'
import Ball from './ball'
import Scoreboard from './scoreboard'



const gap = 10

export default class Game {
constructor(){

    const canvas = document.getElementById('game')

    this.width = canvas.width;
    this.height = canvas.height;
    this.context  = canvas.getContext('2d');
    this.context.fillStyle = "white";


    this.p1 = new Paddle(this.height, 5, 'white', player1Keys)
    this.p2 = new Paddle(this.height, this.width -10,'white', player2Keys)


    this.ball = new Ball(this.x, this.y);

    this.player1score = new Scoreboard()
    this.player2score = new Scoreboard()

  }

drawLine(){

this.context.fillStyle = "white";
this.context.setLineDash([10,10]);
this.context.beginPath();
this.context.moveTo(this.width / 2,0);
this.context.lineTo(this.width / 2, this.height);
this.context.strokeStyle = "white";
this.context.stroke();

}

drawBoard(){
this.context.fillStyle = "black";
this.context.fillRect(0,0,this.width, this.height);
this.drawLine();


}

render() {
      this.drawBoard(this.context)
      this.p1.render(this.context)
      this.p2.render(this.context)
      this.ball.render(this.context,this.p1, this.p2)
      this.player1score.render(this.context,this.player1score)
      this.player2score.render(this.context,this.player2score)

}

   }


