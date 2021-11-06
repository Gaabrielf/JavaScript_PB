const math = require('./math');

let pliki = process.argv;

var myArgs = process.argv;


let fs = require('fs');
  let a = fs.readFileSync(pliki[2])*1;
  let b = fs.readFileSync(pliki[3])*1;

const resultAdd = 'a + b = ' + math.add(a, b);
const resultSub = 'a - b = ' + math.sub(a, b);
const resultMul = 'a * b = ' + math.mul(a, b);
const resultDiv = 'a / b = ' + math.div(a, b);


if (process.argv.length === 2) {
  console.log('Zbyt mało parametrów');
}
  else if (process.argv.length > 4) {
     console.log('Zbyt dużo parametrów');
  }
    else  { 
console.log(resultAdd);
console.log(resultSub);
console.log(resultMul);
console.log(resultDiv);
}



fs.writeFileSync('wynik.txt', resultAdd + '\n');
fs.appendFileSync('wynik.txt', resultSub + '\n');
fs.appendFileSync('wynik.txt', resultMul + '\n');
fs.appendFileSync('wynik.txt', resultDiv + '\n');