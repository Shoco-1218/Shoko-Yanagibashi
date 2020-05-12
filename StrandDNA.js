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

function reverse(s){
  const arrayS = s.split("");
  const reverseS = arrayS.reverse();
  for (let i = 0; i < reverseS.length; i++){
    switch (reverseS[i]){
      case "A":
      reverseS[i] = "T";
      break;
      case "T":
      reverseS[i] = "A";
      break;
      case "C":
      reverseS[i] = "G";
      break;
      case "G":
      reverseS[i] = "C";
      break;
      default:
      reverseS[i] = "No answer";
    }
  }

  console.log(reverseS.join(''));

}


function main() {
  // console.log(input);
  // console.log(inputLines);
  reverse(readLine());
}  