const user = {
    name: 'Jan',
    lastName: 'Nowak'
};

const userString = JSON.stringify(user);


const fs = require('fs');
fs.writeFileSync('user.json', userString);