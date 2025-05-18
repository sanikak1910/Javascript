//IIFE(Immediately Invoked Function Expression)
//IIFE is a function that is executed immediately after it is defined.
//The reason is we don't want global scope pollution. 

(function connectDb(){
    //named IIFE
    console.log("DB Connected");
})();

// Syntax: (function(){})();

( ()=>{
    console.log("DB Connected");
} )();
//To make sure this function runs, we need to explicitly add a semicolon at the end of the previous line.

//Passing parameters to IIFE
( (name)=>{
    console.log(`DB Connected ${name}`);
} )('MongoDB')