const fs = require('fs');
const rearrangementProcedure = fs
  .readFileSync('rearrangementProcedure.txt', 'utf-8')
  .split('\r\n');
const startingStacks = fs
  .readFileSync('startingStacks.txt', 'utf-8')
  .split('\r\n');

let stacks = {};

for (let i = 0; i < startingStacks.length; i++) {
  const line = startingStacks[i];

  for (let j = 0; j < line.length; j++) {
    const character = line[j];
    if (character >= 'A' && character <= 'Z') {
      const index = startingStacks[startingStacks.length - 1][j];
      if (stacks[index]) {
        stacks[index].unshift(character);
      } else {
        stacks[index] = [character];
      }
    }
  }
}

let topCrates = '';

for (let i = 0; i < rearrangementProcedure.length; i++) {
  let cratesToMove = rearrangementProcedure[i].split(' ')[1];
  let moveFromStack = rearrangementProcedure[i].split(' ')[3];
  let moveToStack = rearrangementProcedure[i].split(' ')[5];

  for (let moves = 1; moves <= cratesToMove; moves++) {
    let crateToMove = stacks[moveFromStack].pop();
    stacks[moveToStack].push(crateToMove);
  }
}

for (let i = 1; i <= startingStacks.length; i++) {
  topCrates += stacks[i][stacks[i].length - 1];
}

console.log('top crates', topCrates);
