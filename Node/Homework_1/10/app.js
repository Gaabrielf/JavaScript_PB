const math = require('./math');

let pliki = process.argv;


  let fs = require('fs');
  let a = fs.readFileSync(pliki[2])*1;
  let b = fs.readFileSync(pliki[3])*1;


const resultAdd = 'a + b = ' + math.add(a, b);
const resultSub = 'a - b = ' + math.sub(a, b);
const resultMul = 'a * b = ' + math.mul(a, b);
const resultDiv = 'a / b = ' + math.div(a, b);

console.log(resultAdd);
console.log(resultSub);
console.log(resultMul);
console.log(resultDiv);

fs.writeFileSync('wynik.txt', resultAdd + '\n');
fs.appendFileSync('wynik.txt', resultSub + '\n');
fs.appendFileSync('wynik.txt', resultMul + '\n');
fs.appendFileSync('wynik.txt', resultDiv + '\n');