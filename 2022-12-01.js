/**
 * input string with sections of numbers separated by space
 * output number (the section with highest total value)
 */

/**
 * input each new number one at a time
 * put the numbers in an array with a sub array
 *  if line is empty create a new subarray and put the numbers there
 * when there is no more numbers...
 * create an empty array called totalCalories
 *  loop through the array, check each subarray and add the numbers togheter => save to totalCalories
 *  compare the values in totalCalories to find the biggest one and return it
 *
 */

const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');

let stringToArray = data.split('\r\n');
console.log(stringToArray[13] === '');

let caloriesPerElf = [];
let subArray = [];

for (let i = 0; i <= stringToArray.length; i++) {
  if (stringToArray[i] !== '') {
    subArray.push(stringToArray[i]);
  } else {
    caloriesPerElf.push(subArray);
    subArray = [];
  }
}

let biggestValue = 0;

for (let i = 0; i < caloriesPerElf.length; i++) {
  let total = 0;
  let currentValue = 0;

  for (let j = 0; j < caloriesPerElf[i].length; j++) {
    currentValue += +caloriesPerElf[i][j];

    if (currentValue > total) total = currentValue;
  }

  if (total > biggestValue) biggestValue = total;
}

console.log(biggestValue);
