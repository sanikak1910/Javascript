// Scopes in JavaScript
if(true){
    let a =10;
    const b= 20;
    var c = 30;
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30
//var is function scoped, let and const are block scoped
//var is not used in modern JavaScript
//let and const are used in modern JavaScript

let x = 200;
const y =300;
if(true){
    let x = 20;
    const y =30;
    // console.log("Inner x:",x); // Inner x: 20
    // console.log("Inner y:",y); // Inner y: 30
}
// console.log("Outer x:",x); // Outer x: 200
// console.log("Outer y:",y); // Outer y: 300

//Nested Scope 
function one(){
    const username ="Julia";

    function two(){
        const password = "1234";
        // console.log(username + password); // Julia1234
    }
    // console.log(password); // ReferenceError: password is not defined
    two(); // 1234
}
one();
//Child can access parent variables but parent cannot access child's variables.
//For child, the parent is global scope.

//Global Scope
//Global scope is the outermost scope in JavaScript.
//Variables declared outside of any function or block are in the global scope.
//Global variables can be accessed from anywhere in the code.

// Local Scope
//Local scope is the scope inside a function or block.
//Variables declared inside a function or block are in the local scope.
//Local variables can only be accessed from within the function or block where they are declared.
//Local scope is also called function scope.

if(true){
    const username = "Mia";
    if(username === "Mia"){
        const password = "mia@1223";
        console.log(username + password); // Mia mia@1223
    }
    // console.log(password);// ReferenceError: password is not defined
}
// console.log(username); // ReferenceError: username is not defined
addOne(4);// 5
function addOne(num){
    return num +1;
}
console.log(addTwo(4));//ReferenceError: Cannot access 'addTwo' before initialization
//Function is declared after it is called
const addTwo = function(num){
    return num +2;
}
console.log(addTwo(4))// 6;