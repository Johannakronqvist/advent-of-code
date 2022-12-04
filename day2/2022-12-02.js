const fs = require('fs');
const gameData = fs.readFileSync('rpsData.txt', 'utf-8').split('\r\n');

const gameScores = {
  'A Y': 8,
  'B Z': 9,
  'C X': 7,
  'A Z': 3,
  'B X': 1,
  'C Y': 2,
  'A X': 4,
  'B Y': 5,
  'C Z': 6,
};

let totalScore = 0;

for (let i = 0; i < gameData.length; i++) {
  totalScore += gameScores[gameData[i]];
}

console.log('totalScore', totalScore);
