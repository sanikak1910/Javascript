//Functions in JS 
// function add(number1, number2){
//     console.log(number1 + number2);
// }
// add(5,10);
function add(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
const result = add(5,17);
// console.log(result);

// function loginUserMessage(userName){ // you can define default values also like 
function loginUserMessage(userName = "Sam"){
    if(userName === undefined){  //(!userName)
        console.log("Please enter a username");
        return
    }
    return `${userName} logged In`; 
}
// console.log(loginUserMessage("John Doe"));//John Doe logged In
// console.log(loginUserMessage());//undefined logged In
console.log(loginUserMessage());

 