const fs = require('fs');
const sectionData = fs.readFileSync('sectionData.txt', 'utf-8').split('\r\n');

let rangeContainingTheOther = 0;

function sect1IncludesSect2(section1, section2) {
  if (+section1[0] <= +section2[0] && +section1[1] >= +section2[1]) return true;
}

function sect2IncludesSect1(section1, section2) {
  if (+section2[0] <= +section1[0] && +section2[1] >= +section1[1]) return true;
}

for (let i = 0; i < sectionData.length; i++) {
  const sectionPair = sectionData[i].split(',');
  const section1 = sectionPair[0].split('-');
  const section2 = sectionPair[1].split('-');

  if (sect1IncludesSect2(section1, section2)) {
    rangeContainingTheOther += 1;
  } else if (sect2IncludesSect1(section1, section2)) {
    rangeContainingTheOther += 1;
  }
}

console.log(rangeContainingTheOther);
