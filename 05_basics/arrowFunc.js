//this keyword 
//this keyword refers to the current context
const user = {
    username : 'Julia',
    password : 'julia@123',
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);//this refers to current object
    }
}

// user.welcomeMessage(); // Welcome Julia
// user.username = "Varad"
// user.welcomeMessage(); // Welcome Varad //here the username is changed to Varad.
//Now the current context is Varad.
// console.log(this); //{} //this refers to the global object 
//Global object is the object that contains all global variables and functions.
//In the browser, the global object is the window object.
//In Node.js, the global object is the global object.  

// function basic(){
//     let username = "Mia";
//     console.log(this); //{} //this refers to the global object
//     console.log(this.username); //undefined
// }
// basic();

//Arrow function
const basic = () => {
    let username ="User";
    console.log(this.username); 
}
basic(); //undefined

// const addNumbers = (num1, num2) =>{
//     return num1+num2;
// }
//Implicit return
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(10,20)); //30

const arr = [1,2,3,4,5];
arr.forEach((num) =>{
    console.log(num); //1 2 3 4 5
})