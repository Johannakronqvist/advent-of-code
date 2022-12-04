const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');

//split by new line
let stringToArray = data.split('\r\n');

let caloriesPerElf = [];
let addCalories = 0;

for (let i = 0; i <= stringToArray.length; i++) {
  if (stringToArray[i] !== '') {
    addCalories += +stringToArray[i];
  } else {
    caloriesPerElf.push(addCalories);
    addCalories = 0;
  }
}

caloriesPerElf.sort((a, b) => b - a);

const totalCaloriesTopThree =
  caloriesPerElf[0] + caloriesPerElf[1] + caloriesPerElf[2];

console.log(totalCaloriesTopThree);
