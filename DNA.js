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

function count(s){
  let countA = 0;
  let countC = 0;
  let countG = 0;
  let countT = 0;

  for(let i = 0; i < s.length; i++){
    if(s[i] == "A"){
      countA++;
    }else if (s[i] == "C"){
      countC++;
    }else if (s[i] == "G"){
      countG++;
    }else{
      countT++;
    }
  }
  
  console.log(countA + " " + countC + " " + countG + " " + countT);
}

function main() {
  // console.log(input);
  // console.log(inputLines);
  count(readLine());
}
