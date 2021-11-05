// // Zadanie 1

// let years = [1974, 1900, 1985, 2000];
// let year;
// for (let i = 0; i < years.length; i++) {
//   year = years[i];
//   if ((year % 100 === 0 && year % 400 === 0) || (year % 4 === 0) && year % 100 !== 0) {
//     console.log(year); 
//   }
// }


// // Zadanie 2

// function factorial(n) {
//     let product = 1;
//     while (n>1) {
//         product = product*n;
//         n--;
//     }
//     return product;
// }
// factorial(7)

// // Zadanie 3

// let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let odds = valueArray.filter(n => n%2)
// let sum = 0;
// let i = 0;
// console.log("Sum of ", odds);
// while (i < odds.length) {
//   sum = sum + odds[i];
//   i++;
// }
// console.log(sum);

// // Zadanie 4; two loops 

// let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// for (let i = 0; i < valueArray.length; i++) {
//     Math.min(...valueArray) }

// let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// for (let i = 0; i < valueArray.length; i++) {
//     Math.max(...valueArray) }

// // Zadanie 5

// function longest_str_in_array(array)
//   {
//     var max_string = array[0].length;
//     var answer = array[0];
//     for (var i = 1; i < array.length; i++) {
//         var maxi = array[i].length;
//         if (maxi > max_string) {
//             answer = array[i];
//             max_string = maxi;
//         }
//     }
//     return answer;
// }
// console.log(longest_str_in_array(["Karol","Adam","Rogowski","Politechnika","Super","Weekend"]));

// // Zadanie 6

// let arr = [1,6,23,8,4,98,3,7,3,98,4,98]
// let max = Math.max(...arr)

// let op = []
// for(let i=0; i<arr.length; i++){ 
//  if(arr[i] === max){
//     op.push(i)
//   }
// }
// console.log(op)

// // Zadanie 7

// let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let evens = valueArray.filter(n => n % 2 === 0)
// let sum = 0;
// let i = 0;
// console.log("Average of", evens);
// while (i < evens.length) {
//   sum = sum + evens[i];
//   i++;
// }
// let average = (sum / evens.length);
// console.log(average);


// // Zadanie 8; z "0"

// let valueArray = [1,6,23,8,4,98,3,7,3,98,4,98];
// let evenIndexes = valueArray.filter(((a,i)=>i%2===0));
// let sum = 0;
// let i = 0;
// console.log("Average of", evenIndexes);
// while (i < evenIndexes.length) {
//   sum = sum + evenIndexes[i];
//   i++;
// }
// let average = (sum / evenIndexes.length);
// console.log(average);

// // Zadanie 9; ???

// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// for (index = 0; index < array.length; index++) 
// {  console.log(array[index]);}

// let array = [1,6,23,8,4,98,3,7,3,98,4,98];
// array = array.filter(e => e % 2 === 0)
// console.log(array);
