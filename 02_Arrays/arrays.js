//Array Declaration and Initialization
const arr1 = new Array(1,2,34,56,65,32);
// console.log(arr1);

const arr2 = [10,20,30,40,50];
// console.log(arr2);
// console.log(arr2[0]);//Accessing first element

//Array Methods
// console.log(arr2.length); //Length of the array 

// const arr3 = new Array();
// arr3.push(20);//Adds element at the end of the array
// arr3.push(40, 60, 80,100,120);
// console.log(arr3);
// arr3.pop();//Removes last element of the array
// console.log(arr3);

// arr3.unshift(10); //Adds element at the beginning of the array
// console.log(arr3);
// arr3.shift(); //Removes first element of the array
// console.log(arr3);

//Splice and Slice Operations 
const arr4 = [10,20,30,40,50,60,70,80,90];
const slicedArray = arr4.slice(2,5);// //Returns a shallow copy of a portion of an array
//  into a new array object selected from start to end (end not included) where start and end 
// represent the index of items in that array. The original array will not be modified.
// console.log(slicedArray); // [30, 40, 50]

const splicedArray = arr4.splice(2,5);
// console.log(arr4);
// console.log(splicedArray); // [30, 40, 50, 60, 70]
//The splice() method changes the contents of an array by removing or replacing 
// existing elements and/or adding new elements in place.
//The splice() method returns an array containing the deleted elements.
//The original array will be modified.

//Concat and Join Operations
const fruits = ['Apple','Banana','Mango'];
const vegetables = ['Potato','Tomato','Onion'];
const fruits1 = fruits.join(','); //Joins all elements of an array into a string
// console.log(fruits1); // 'Apple,Banana,Mango;

// fruits.push(vegetables);
// console.log(fruits); // ['Apple', 'Banana', 'Mango', ['Potato', 'Tomato', 'Onion']]
// console.log(fruits[3][2]);// 'Onion'
// const food = fruits.concat(vegetables);
// console.log(food); // ['Apple', 'Banana', 'Mango', 'Potato', 'Tomato', 'Onion']

const food = [...fruits,...vegetables];//Spread operator
console.log(food); // ['Apple', 'Banana', 'Mango', 'Potato', 'Tomato', 'Onion']

let score1 = 100;
let score2 = 200;
let score3 = 400;
 console.log(Array.of(score1,score2,score3)); // [100, 200, 400]
//Array.of() method creates a new Array instance from a variable number of arguments,
//regardless of number or type of the arguments.
//Array.of() method is similar to Array() constructor, but it does not create an array
// with a single element (like Array(3) creates an array with 3 empty slots).

//Array.isArray() method returns true if the argument is an array,
//and false otherwise.
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(vegetables)); // true
console.log(Array.isArray(10)); // false


//Array.from() method creates a new, shallow-copied Array instance from an 
// array-like or iterable object.
const str = 'Hello';
const strArray = Array.from(str); // ['H', 'e', 'l', 'l', 'o']
console.log(strArray); // ['H', 'e', 'l', 'l', 'o']
console.log(str);