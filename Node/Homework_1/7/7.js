let os = require('os');
try {
    console.log(os.userInfo());
}
catch (err) {
    console.log(": error occurred" + err);
}

const fs = require('fs');
fs.writeFileSync('7.txt', os.userInfo());
