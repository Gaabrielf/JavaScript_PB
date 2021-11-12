// Zadanie 1.1

// let iife = (function () {

// let obj = {
//     val : 2,
//     setValue: function () {
//     let val = "mama";
//     return this.val;
//     },
//     showValue: function () {
//       let val = "mama";
//       if (typeof val == "undefined") {
//             return "Value is not defined";
//           }
//           return this.val; 
//           },
//      reverseValue: function () {
//       let val = "mama";
//       let newVal = "";
//     for (let i = val.length - 1; i >= 0; i--) { 
//         newVal += val[i];
//     }
//     return newVal; 
// }}
// })();

// console.log(iffe);

// Zadanie 1.2

// let result = (function () {
//     let item = "mama";
//     function setValue() {
//      return this.item;
//     }
//     function showValue() {
//      let item = "mama";
//      if (typeof item == "undefined") {
//       return "Value is not defined";
//     }
//     return this.item; 
//     }
//     function reverseValue() {
//     let item = "mama";
//     if (typeof item == Number) {
//         return item*(-1);
//           }
//         function reverseString(){
//         let newItem = "";
//         for (i = item.length - 1; i >= 0; i--) { 
//             newItem += item[i];
//         }
//         return newItem; 
//           }}
   
//     return {
//      setValue : setValue,
//      showValue : showValue,
//      reverseValue : reverseValue }
//   })();
  

// console.log(iife);

// Zadanie 2


// let operations = {
//   sum: (x, y) => x + y,
//   sub: (x, y) => x - y,
//   mul: (x, y) => x * y,
//   div: (x, y) => x / y,
// };

// let calculation = (function (x, y) {
//   let innerObject = {
//     param: {
//       x: x,
//       y: y,
//     },
//     mathOperation: null,
//     setOperation: setOperation,
//     calculate: calculate,
//   };

//   function setOperation(mathOperation) {
//     this.mathOperation = mathOperation;
//   }

//   function calculate() {
//     return this.mathOperation(this.param.x, this.param.y);
//   }
//   return innerObject;
// })(5, 10);

// calculation.setOperation(operations.sub);
// console.log(calculation.calculate());

// Zadanie 3

// let arr = [
//     {x:2,y:3},
//     {x:-1,x:6},
//     {x:0,x:8}
//     ];

// for(i = 0; i < arr.length; i++) {
//     let obj = arr[i];

// let baseObject = 
//     {  x,
//        y,
//        sum: function sum () {
//     return this.x + this.y }
// }}

// console.log(baseObject);