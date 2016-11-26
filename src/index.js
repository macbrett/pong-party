import './game.css';
import game from './game'

var game = new game();

const fps = 30;

game.render
(function gameLoop() {
  game.render()
  setTimeout(gameLoop, fps);
}());
