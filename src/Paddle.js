
export default class Paddle{

  constructor(boardHeight, x, color, keys){
    this.width = 5;
    this.height = 50;
    this.x = x;
    this.y = (boardHeight / 2) - (this.height / 2);
    this.color = color;
    this.keys = keys;
    this.speed = 5
    this.boardHeight = boardHeight;
    document.addEventListener('keydown', event => this.keyListener(event));


}


  keyListener(event){

    switch(event.keyCode){
      case this.keys.up:
      this.moveUp()
      break;
      case this.keys.down:
      this.moveDown()
      break;
      default:return
    }

  }

/*player1Score(){
const sum = 0
if (this.x >=300){
const sum = sum + 1
console.log("hello")
}
}



player2Score(){
const sum = 0
if (this.x <= 0){
const sum = sum + 1
console.log("hi")
}
}*/

  moveUp(){
    if(this.y - this.speed>=8){

      this.y -=this.speed
    }
  }
  moveDown(){
    if(this.y + this.height -this.speed<=this.boardHeight){
      this.y +=this.speed
    }
  }
  render(context){

    context.fillStyle = this.color
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height


      );
  }
}


