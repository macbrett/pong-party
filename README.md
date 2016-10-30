# PONG-PARTY

An exciting throwback to the days when we grab some slurpees after school and head to the arcade. Enjoy!


Contributors: Red Academy Staff and fellow student travellers

URL: https://macbrett.github.io/pong-party/.


DESCRIPTION

Pong-Party is a simple pong game written using Javascript, CSS and HTML. It is written using Ecma 2015 and relies on classes. Each class is written in its own js file and the main index.js file pulls those classes for use by using the require() function.

Webpack is used as the js file bundler. It allows one to split the code into multiple bundles, which can be loaded using the require function.

The src files are:

index.js,
Ball.js,
Game.js,
Paddle.js,
ScoreBoard.js,
keys.js

Pong-Party ustilizes the HTML canvas element, which is used to draw graphics on the fly, via JavaScript. The <canvas> element is only a container for graphics. JavaScript is used to actually draw the graphics.

OTHER TECHNOLOGIES

node.js
babel
webfont generator

SAMPLE CODE

import Paddle from './Paddle' // this imports the module into a larger js file

export default class Game {   // this exports the module to a larger js file
constructor()

SCREENSHOT

![image](https://{https://github.com/macbrett/pong-party/blob/master/screenshot/pong-party.png?raw=true})



PLAYER INSTRUCTIONS

 Player 1:
* a: up
* z: down


 Player 2:
* ▲ : up
* ▼: down

