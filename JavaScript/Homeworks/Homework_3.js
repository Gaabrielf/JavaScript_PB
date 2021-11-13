// Zadanie 1

// let iifeg = (function () {

//    return {
//       value: "",
//     setValue: function (x) {
//     this.value=x;
//     },
//     showValue: function () {
//       console.log(this.value); 
//           },
//      reverseValue: function () {
//       if (typeof(this.value)==Number){
//           this.value*= -1;
// }
//         if (typeof(this.value)=="string"){
//            this.value = this.value.split("").reverse("").join("");
//         }}}
// })();



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

// let baseObject = 
//     {  x :0,
//        y: 0,
//     sum: function () {
//     return this.x + this.y }
// }};

// arr.forEach(object => console.log(baseObject.sum.call(object)));
