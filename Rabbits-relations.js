'use strict';
{
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

function offSpring(n, k){
  let oldA = 0;
  let A = 0;
  let N = 1;

  for (let i = 1; i < n; i++){
    oldA = A;
    A += N;
    N = oldA * k;
  }

  return A + N;
}

function main() {
  // console.log(input);
  // console.log(inputLines);

  const  str = readLine();
  const  array = str.split(" ");
  const n = array[0];
  const k = array[1];

  let result = offSpring(n, k);
  console.log(result);
} 

}