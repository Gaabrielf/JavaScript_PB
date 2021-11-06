// Zadanie 1

let array = [1,6,23,8,4,8,3,7];
let sum = array.reduce((accumulator, current) => accumulator + current); {
console.log(sum);
}


// Zadanie 2

let sum = (a, b) => a + b;
let array = [1,6,23,8,4,8,3,7];
let a = array[0];
let b = array[array.length - 1]; 
console.log(a + b); 


// Zadanie 3

function factorial(n) {
let result = 1;
while (n>1) {
result = result*n;
n--;
}
return result;
}


// Zadanie 4

array = [1,6,23,8,4,8,3,7];
reversedArray = [];
array.forEach(element => {
    reversedArray.unshift(element)
});
console.log(reversedArray);


// Zadanie 5 // źle

function pairwiseSum(arr, n)
{
let sum = 0;
for(let i = 0; i + 1 < n; i += 2)  {
sum = arr[i] + arr[i + 1];
console.log(sum);
}}
let arr = [1,6,23,8,4,8,3,7];
let n = arr.length;
pairwiseSum(arr, n);


// Zadanie 6 // jak?


// Zadanie 7

let items = [1,6,23,8,4,8,3,7];
let item = items[Math.floor(Math.random()*items.length)];
console.log(item);


// Zadanie 8 // nie rozumiem polecenia

// Zadanie 9

const array = [1,6,23,8,4,8,3,7];
let number = null;
const tab = [];
const func = (array) => {
    for (let i = array.length; i > 0; i--){
        let min = 0;
        let max = array.length;
        let b = Math.floor(Math.random() * (max - min) + min)
        number = array.splice(b,1);
        tab.push(...number)
    }
    return tab
}
console.log(func(array));


const array = [1,6,23,8,4,8,3,7];
let number = null;

const func = (array) => {
    const tab = [];
    for (array.length> 0){
        let b = Math.floor(Math.random() * array.length)
        number = array.splice(b,1);
        tab.push(...number)
    }
    return tab
}
console.log(func(array));

// Zadanie 10

// Zadanie 11

const d = new Date();

const weekday = new Array(7);
weekday[0] = "Niedziela";
weekday[1] = "Poniedziałek";
weekday[2] = "Wtorek";
weekday[3] = "Środa";
weekday[4] = "Czwartek";
weekday[5] = "Piątek";
weekday[6] = "Sobota";

let day = weekday[d.getDay()];
console.log(day);


// Zadanie 12

const d = new Date();

const weekday = new Array(7);
weekday[0] = "5";
weekday[1] = "4";
weekday[2] = "3";
weekday[3] = "2";
weekday[4] = "1";
weekday[5] = "0";
weekday[6] = "6";

let day = weekday[d.getDay()];
console.log(day);


// Zadanie 13

function showObject(x, y) {
console.log("Suma to " + (x + y));
console.log("Różnica to " + (x - y));
console.log("Iloczyn to " + (x * y));
console.log("Iloraz to " + (x / y));
}
