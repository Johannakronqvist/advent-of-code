const fs = require('fs');
const markers = fs.readFileSync('markers.txt', 'utf-8');

let subRoutine;
let startOfPacket;

for (let i = 0; i < markers.length; i++) {
  if (startOfPacket !== undefined) break;

  let marker1 = markers[i];
  let marker2 = markers[i + 1];
  let marker3 = markers[i + 2];
  let marker4 = markers[i + 3];

  subRoutine = [marker1, marker2, marker3, marker4];

  for (let j = 0; j < subRoutine.length; j++) {
    let arr = subRoutine.filter((marker) => marker === subRoutine[j]);
    if (arr.length > 1) {
      break;
    }

    if (j === 3) startOfPacket = i + 4;
  }
}

console.log('start of packet', startOfPacket);
