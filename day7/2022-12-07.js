const fs = require('fs');
const terminalData = fs
  .readFileSync('terminalOutput.txt', 'utf-8')
  .split('\r\n');

//Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

// let tree = {
//   '/': {
//     a: {
//       e: { i: 584 },
//       f: 29116,
//       'h.lst': 62596,
//     },
//     'b.txt': 29116,
//     'c.dat': 8504156,
//     d: {},
//   },
// };

//let path = '/aei';

/*
ÖVERGRIPANDE
 - Skapa ett objekt med alla mappar och filer i subobjekt
 - Räkna ihop värdet av alla värden i ett objekt som är nummer
 - Spara de värden som är högst 100000 i en variabel 
 */

/*
 RÄKNA IHOP TOTALA VÄRDET I VARJE MAPP
 - Loopa igenom terminalOtput, för varje objekt => skap en likal variabel för värdet, kolla längden för objektet och fortsätt loopa igenom subobjekten så länge de finns
 - addera alla vädren i en variabel så länge värdet är under 100000 => om värdet överstiger => sluta och gå vidare => annars lägg till vädet i arrayen totalValues samt den lokala variabeln för föräldraobjektet.
  */
const NUMBERS = '0123456789';
const TOTALOUTPUT = 100000;

let tree = { '/': {} };
let path = '';

let totalSize = 0;
let currentFolder = 0;

function changeDir(dirCommand) {
  if (dirCommand === '..') {
    //back one directory
    path = path.slice(0, -1);
  } else {
    //save current directory
    path += dirCommand;
  }
}

function createDir(dirName) {
  let dirPosition = tree;

  for (let i = 0; i < path.length; i++) {
    dirPosition = dirPosition[path[i]];
  }

  dirPosition[dirName] = {};
  console.log('tree', tree);
}

/*
 SKAPA OBJEKT AV TERMINAL OUTPUT DATAN
 - Loopa genom alla rader i datan: För varje rad => om det är en mapp lägg till eller ta bort mappen i 'path', kolla vilken typ och kalla på den funktionen för att lägga till ny data.
  */

function createDirectoriesObj() {
  for (let i = 0; i < terminalData.length; i++) {
    let currentLine = terminalData[i].split(' ');
    console.log('current line: ', currentLine);

    if (currentLine[0] === 'dir') {
      createDir(currentLine[1]);
    } else if (currentLine[1] === 'cd') {
      changeDir(currentLine[2]);
    } else {
      continue;
    }
  }
}

createDirectoriesObj();
