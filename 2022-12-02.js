const fs = require('fs');
const gameData = fs.readFileSync('rpsData.txt', 'utf-8').split('\r\n');

const gameScores = {
  winning: { 'A Y': 8, 'B Z': 9, 'C X': 7 },
  loosing: { 'A Z': 3, 'B X': 1, 'C Y': 2 },
  draw: { 'A X': 4, 'B Y': 5, 'C Z': 6 },
};

function getScore(shapes) {
  switch (shapes) {
    case 'A Y':
      totalScore += gameScores.winning['A Y'];
      break;
    case 'B Z':
      totalScore += gameScores.winning['B Z'];
      break;
    case 'C X':
      totalScore += gameScores.winning['C X'];
      break;
    case 'A Z':
      totalScore += gameScores.loosing['A Z'];
      break;
    case 'B X':
      totalScore += gameScores.loosing['B X'];
      break;
    case 'C Y':
      totalScore += gameScores.loosing['C Y'];
      break;
    case 'A X':
      totalScore += gameScores.draw['A X'];
      break;
    case 'B Y':
      totalScore += gameScores.draw['B Y'];
      break;
    case 'C Z':
      totalScore += gameScores.draw['C Z'];
      break;
  }
}

let totalScore = 0;

for (let i = 0; i < gameData.length; i++) {
  getScore(gameData[i]);
}

console.log('totalScore', totalScore);
