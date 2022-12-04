//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

const fs = require('fs');
const gameData = fs.readFileSync('rpsData.txt', 'utf-8').split('\r\n');

const gameScores = {
  'A Y': 4, //draw
  'B Z': 9, //win
  'C X': 2,
  'A Z': 8, //win
  'B X': 1,
  'C Y': 6, //draw
  'A X': 3,
  'B Y': 5, //draw
  'C Z': 7, //win
};

let totalScore = 0;

for (let i = 0; i < gameData.length; i++) {
  totalScore += gameScores[gameData[i]];
}

console.log('totalScore', totalScore);
// const fs = require('fs');
// const gameData = fs.readFileSync('rpsData.txt', 'utf-8').split('\r\n');

// const roundOutcomeScore = {
//   X: 0,
//   Y: 3,
//   Z: 6,
// };

// const shapeScore = {
//   rock: 1,
//   papper: 2,
//   scissors: 3,
// };

// const getShapes = {
//   A: { lose: 'scissors', draw: 'rock', win: 'paper' },
//   B: { lose: 'rock', draw: 'paper', win: 'scissors' },
//   C: { lose: 'paper', draw: 'scissors', win: 'rock' },
// };

// function getOutcomeScore(shapes) {
//   outcomeChar = shapes[shapes.length - 1];
//   return roundOutcomeScore[outcomeChar];
// }

// function getShape(shapes, outcomeChar) {
//   return getShapes[shapes[0]][outcomeChar];
// }

// function calculateScore() {
//   let outcome;
//   let outcomeChar;
//   let shape;

//   for (let i = 0; i < gameData.length; i++) {
//     outcome = getOutcomeScore(gameData[i]);
//     shape = getShape(gameData[i], outcomeChar);
//   }
//   console.log('outcome', outcome);
//   console.log('shape', shape);
//   totalScore += outcome + shapeScore[shape];
// }

// let totalScore = 0;

// calculateScore();

// console.log('totalScore', totalScore);
