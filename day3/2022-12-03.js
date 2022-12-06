const fs = require('fs');
const rucksackData = fs.readFileSync('rucksackData.txt', 'utf-8').split('\r\n');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let totalValueOfItems = 0;

for (let i = 0; i < rucksackData.length; i++) {
  const itemsOfRucksack = rucksackData[i];
  const middleOfItems = itemsOfRucksack.length / 2;

  const compartment1 = itemsOfRucksack.slice(0, middleOfItems);
  const compartment2 = itemsOfRucksack.slice(middleOfItems);

  let j = 0;
  let errorItem;

  while (errorItem === undefined) {
    let currentCharacter = compartment1[j];
    if (compartment2.includes(currentCharacter)) {
      errorItem = currentCharacter;
    } else {
      j += 1;
    }
  }

  totalValueOfItems += ALPHABET.indexOf(errorItem) + 1;
}

console.log('totalValueOfItems', totalValueOfItems);
