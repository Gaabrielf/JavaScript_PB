const user = {
    name: 'Jan',
    lastName: 'Nowak'
};

const userString = JSON.stringify(user);

// wczytujemy wbudowany moduł 'fs'(file system) i przypisujemy jego wyeksportowane funkcje/zmienne do stałej 'fs'
// wywołujemy funkcję 'writeFileSync' z naszego modułu 'fs'
// pierwszy parametr funkcji to nazwa pliku, drugi zaś wartość którą chcemy zapisać

const fs = require('fs');
fs.writeFileSync('user.json', userString);
