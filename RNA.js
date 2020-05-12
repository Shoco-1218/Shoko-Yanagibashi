'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
let inputLines = [];
let currentLine = 0;

process.stdin.on('data', chunk => {
    input += chunk;
});

process.stdin.on('end', _ => {
    inputLines = input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputLines[currentLine++];
}

function replace(t){
  const arrayT = t.split("");
  
  for (let i = 0; i < arrayT.length; i++){
    if(arrayT[i] == "T"){
      arrayT[i] = "U";
    }
  }

  console.log(arrayT.join(''));
}

function main() {
  // console.log(input);
  // console.log(inputLines);
  replace(readLine());
}