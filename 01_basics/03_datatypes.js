//1. number 
//2. bigInt 
//3. String = > " "
//4. boolean = true/false
//5. null = standalone value(empty value)
let state = null;
//Null typeof is an object
//6. undefined = no value defined, value not assigned
//7. Symbol = unique value
//8. Object = collection of key value pairs 

console.log(typeof state); //object
console.log(typeof "Denmark"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined

//Conversion of Datatypes
//1.Convert to Number
let str = "123";
let valueInNumber = Number(str); //123
console.log(typeof valueInNumber);
console.log(typeof(+str)); //number
let str1 = "123abc";
let valueInNumber1 = Number(str1); //NaN
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //NaN

let str3 = null;
let valueInNumber3 = Number(str3);
console.log(typeof valueInNumber3);//number
console.log(valueInNumber3); //0
//undefined: NaN(not a number)
//null:0
//boolean: true :1 , false:0
//String: NaN
//Number: value 

// 2. Converting number to Boolean
let isLoggedIn = 0;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn); //false

// 1 => true, 0 => false
// "" => false
//"string" => true

// 3. Converting number to String
let num = 123;
let num1=88;
let strNum = String(num);
console.log(strNum); //123
console.log(typeof strNum); //string
console.log(typeof(num1+"")); //string
console.log(num1+"");