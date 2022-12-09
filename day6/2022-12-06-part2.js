const fs = require('fs');
const markers = fs.readFileSync('markers.txt', 'utf-8');

let startOfPacket;
let lengthOfSubRoutine = 14;
let subRoutine = [];

for (let i = 0; i < markers.length; i++) {
  if (startOfPacket !== undefined) break;

  subRoutine = [];

  for (let k = 0; k < lengthOfSubRoutine; k++) {
    subRoutine.push(markers[i + k]);
  }

  for (let j = 0; j < subRoutine.length; j++) {
    let arr = subRoutine.filter((marker) => marker === subRoutine[j]);
    if (arr.length > 1) {
      break;
    }

    if (j === 13) startOfPacket = i + 14;
  }
}

console.log('start of packet', startOfPacket);
