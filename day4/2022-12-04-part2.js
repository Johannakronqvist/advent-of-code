const fs = require('fs');
const sectionData = fs.readFileSync('sectionData.txt', 'utf-8').split('\r\n');

let overlappingPairs = 0;

function secttionsOverlapp(section1, section2) {
  if (+section1[1] >= +section2[0] && +section2[1] >= +section1[0]) return true;
}

for (let i = 0; i < sectionData.length; i++) {
  const sectionPair = sectionData[i].split(',');
  const section1 = sectionPair[0].split('-');
  const section2 = sectionPair[1].split('-');

  if (secttionsOverlapp(section1, section2)) overlappingPairs += 1;
}

console.log(overlappingPairs);
