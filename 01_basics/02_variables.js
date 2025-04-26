const accountId=144522;
let accountEmail = "abc@gmal.com";
var accountPassword = "72662"; //not recommmended because of issue in block and functional scope
accountCity = "Pune";//not recommended
let accountState;
// accountId = 4   //not allowed as const is constant 

//These values are allowed to change
accountEmail = "xyz@gmail.com";
accountPassword = 234;
accountCity = "Mumbai";

console.log(accountId);

//console.table() prints takes multiple inputs and gives output in tabular structure
console.table([accountState, accountEmail, accountId, accountPassword, accountCity])
