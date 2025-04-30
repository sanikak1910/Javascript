//To create a Date object, you use the Date Constructor.
const date = new Date();
// console.log(date); // Current date and time

// console.log(date.toString()); // Current date and time in string format

// console.log(date.toDateString()); // Current date in string format
// console.log(date.toTimeString()); // Current time in string format

// console.log(date.toISOString()); // Current date and time in ISO format
// console.log(date.toLocaleString()); // Current date and time in local format
// console.log(date.getFullYear()); // Current year
// console.log(date.getMonth()); // Current month (0-11)
// console.log(date.getDate()); // Current day of the month (1-31)

// console.log(date.getTime()); // Current timestamp (milliseconds since Jan 1, 1970) 


const date1 = new Date("2023-04-09");
// console.log(date1.toString());

// console.log(date1.getTime());
console.log(Math.floor((date.getTime() - date1.getTime())/1000));//In seconds

console.log(Math.floor((date.getTime() - date1.getTime())/(1000*60*60*24)));//In days

const myDate = new Date();
console.log(myDate.toLocaleString('default',{
    weekday:'long'
}))
console.log(myDate);
