import './game.css';
import Game from './Game'

var game = new Game();

const fps = 30;

game.render
(function gameLoop() {
  game.render()
  setTimeout(gameLoop, fps);
}());
