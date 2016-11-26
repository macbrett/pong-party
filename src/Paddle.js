
export default class Paddle{

  constructor(boardHeight, x, color, keys){
    this.width = 5;
    this.height = 60;
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



  moveUp(){
    if(this.y - this.speed>=0){

      this.y -=this.speed
    }
  }
  moveDown(){
    if(this.y + this.height -this.speed<=this.boardHeight-10){
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


