'use strict';

const uuid = require('node-uuid');
const chess = require('chess.js').Chess;

let game = {};

// const game = () => {
//
// }

game.newGame = function () {
  const game = new chess();
  game.move({ from: 'g2', to: 'f2' });
  return game;
}

module.exports = game;

//
// const game = () => {
//
// }
//
// var game = (function() {
//
//
//   // methods
//   // function print() {
//   //   gameObject.game.ascii();
//   //   return gameObject;
//   // }
//
//   // public API
//   return {
//     game: gameObject.game
//   };
// })();
//
// module.exports = game;
