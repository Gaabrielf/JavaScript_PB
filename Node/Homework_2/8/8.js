// krok 1: npm init -y
// krok 2: npm install yargs
// wczytujemy moduł yargs

// moduł 'yargs' pozwolił nam na przeparsowanie parametrów wejściowych na konkretne właściwości w obiekcie

const yargs = require('yargs');

// zgodnie z dokumentacją biblioteki, aby wywołać przeparsowanie parametrów wejściowych (node 8.js --name=Adam --lastName=Mickiewicz)

const args = yargs.argv;

const name = args.name;
const lastName = args.lastName;

let user = {
    name : name,
    lastName : lastName
}

const userString = JSON.stringify(user);

const fs = require('fs');
fs.writeFileSync('user2.json', userString);
