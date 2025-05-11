function calculateCartPrice(...num){ 
    return num;
} // ...num is a rest parameter that collects all remaining arguments into an array
// console.log(calculateCartPrice(1,2,3,4,5)); // [1,2,3,4,5]

function calculateCartPrice(val1, val2, ...num){
    return num;
}
// console.log(calculateCartPrice(1,2,3,4,5));

//Passing object as a parameter in a function
const user = {
    username : "Julia",
    price :100
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user); // Username is Julia and price is 100
// handleObject({username : "Julia", price : 200}); // Username is Julia and price is 200

const newArray =[100,200,300,400,500];
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(newArray)); // 200
// console.log(returnSecondValue([100,200,300,400,500])); // 200