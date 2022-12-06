const fs = require('fs');
const rucksackData = fs
  .readFileSync('rucksackData2.txt', 'utf-8')
  .split('\r\n');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let sumOfPriorities = 0;

let rucksack1;
let rucksack2;
let rucksack3;

for (let i = 0; i < rucksackData.length; i += 3) {
  rucksack1 = rucksackData[i];
  rucksack2 = rucksackData[i + 1];
  rucksack3 = rucksackData[i + 2];

  let j = 0;

  while (true) {
    const currentItem = rucksack1[j];

    if (rucksack2.includes(currentItem)) {
      if (rucksack3.includes(currentItem)) {
        sumOfPriorities += ALPHABET.indexOf(currentItem) + 1;
        break;
      }
    }

    j += 1;
  }
}

console.log('sumOfPriorities', sumOfPriorities);
