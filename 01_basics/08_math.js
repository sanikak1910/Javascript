//Math functions
const number1 = 90;
const number2 = new Number(760);

// console.log(number1.toFixed(2));// 90.00

const number3 = 90.874;
const number4 = new Number(90.211);
const number5 = 87.50;

// console.log(Math.floor(number3));
// console.log(Math.floor(number4));
// console.log(Math.floor(number5));

// console.log(Math.ceil(number3));
// console.log(Math.ceil(number4));
// console.log(Math.ceil(number5));

// console.log(Math.round(number3));
// console.log(Math.round(number4));
// console.log(Math.round(number5));

// console.log(Math.max(number1, number2, number3, number4, number5));
// console.log(Math.min(number1, number2, number3, number4, number5));
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.random() * 100); // Random number between 0 and 100

// console.log(Math.random()*100 +1); //Avoid 0 

const min = 20;
const max = 50;
const randomNumber = Math.floor(Math.random()* (max-min +1))+min;
console.log(randomNumber); // Random number between 20 and 50