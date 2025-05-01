//Objects declaration
const user = {}
const mySym = Symbol('mySym');
// console.log(mySym); // Symbol(mySym)

//Objects with properties
const user1 ={
    name: "Rachel",
    age: 30,
    [mySym]:"My Symbol",
    email: "rachel@gmail.com",
    isLoggedIn:false
}
// console.log(user1);
// //Accessing properties of an object
// console.log(user1.name);// 'Rachel'
// console.log(user1['name']);// 'Rachel'

// console.log(user1[mySym]); //For accessing symbol property

user1.isLoggedIn = true ; //Updating property
// console.log(user1.isLoggedIn); // true

user1.email = "rachel@microsoft.com";
// Object.freeze(user1); //Freezes the object
user1.email = "rachel@056.com";//It does not give error but does not update the value
// console.log(user1);

user1.greeting = function(){
    console.log(`Hello ${this.name}`);
}
// console.log(user1.greeting()); //Hello Rachel   
// console.log(user1['greeting']()); //Hello Rachel

