const user = {
    name: {
        fullname:{
            firstName : "John",
            lastName : "Doe"
        }
    },
    age : 30,
    email : "johndoe33@yahoo.com"
}
// console.log(user.name);
// console.log(user.name.fullname);
console.log(user.name.fullname.firstName); // John

const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}
const obj3 = {5: "five", 6: "six"}

const obj = Object.assign({}, obj1,obj2,obj3);
// console.log(obj); // {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"}
//Here Object.assign() method copies all enumerable own properties from one or more 
// source objects to a target object.
//Source object : obj1, obj2, obj3
//Target object : {}

// const obj = {
//     ...obj1,
//     ...obj2,
//     ...obj3
// }
// console.log(obj); // {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"}


//Include objects in array 
const user1 =[
    {
        id : 1,
        email :"abc@gmail.com"
    },
    {
        id: 2,
        email:"def@gmail.com"
    }
]
// console.log(user1[0]);
// console.log(user1);
// console.log(user1[1].email); //def@gmail.com

//Get all keys of an object
// console.log(Object.keys(user1)); // [0, 1]
// console.log(Object.keys(user)); // [id, email]
// console.log(Object.values(user1[1]));

// console.log(user.hasOwnProperty('name')); // true
// console.log(user.hasOwnProperty('name1')); // false
//hasOwnProperty() method returns a boolean indicating whether the object
// has the specified property as its own property (as opposed to inheriting it).

//Object.entries() method returns an array of a given object's own enumerable 
// string-keyed property [key, value] pairs.
// console.log(Object.entries(user));