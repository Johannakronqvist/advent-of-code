const fs = require('fs');
const gameData = fs.readFileSync('rpsData.txt', 'utf-8').split('\r\n');

const roundOutcome = {
  X: { lose: 0 },
  Y: { draw: 3 },
  Z: { win: 6 },
};

const shapeScore = {
  rock: 1,
  papper: 2,
  scissors: 3,
};

const getShapes = {
  A: { lose: 'scissors', draw: 'rock', win: 'paper' },
  B: { lose: 'rock', draw: 'paper', win: 'scissors' },
  C: { lose: 'paper', draw: 'scissors', win: 'rock' },
};

function getOutcomeChar(shapes) {
  return shapes[shapes.length - 1];
}

function getOutcome(shapes) {
  const outcomeChar = getOutcomeChar(shapes);
  return Object.keys(roundOutcome[outcomeChar])[0];
}

function getShape(shapes, outcome) {
  return getShapes[shapes[0]][outcome];
}

function calculateScore() {
  let shape;
  let outcomeChar;

  for (let i = 0; i < gameData.length; i++) {
    let outcome = getOutcome(gameData[i]);
    shape = getShape(gameData[i], outcome);
    outcomeChar = getOutcomeChar(gameData[i]);
  }

  totalScore += roundOutcome[outcomeChar][0] + shapeScore[shape];
}

let totalScore = 0;

calculateScore();

console.log('totalScore', totalScore);
