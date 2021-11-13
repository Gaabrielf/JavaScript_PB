const yargs = require('yargs');

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