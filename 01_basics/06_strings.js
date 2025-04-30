const name ="Sophia";
const age = 23;

// console.log(`Hello!! My name is ${name} and my age is ${age}`);
// console.log(name.length);
// const newName = new String("Rachel");//using object
// console.log(newName); //String { 'Rachel' }
// console.log(typeof newName); //object

//String methods
//String is immutable. The changes that happen in string are not reflected in the original string.They are reflected in copy of the string.
//String methods return a new string.
// console.log(newName.length);
// console.log(newName[2]);
// console.log(newName.__proto__); //String {}
// console.log(newName.charAt(4));
// console.log(newName.indexOf("e"));

// console.log(newName.substring(2,6));//Negative values not allowed
// console.log(newName.slice(-2,6));//Negative values allowed

// const str1 =" Hello   World     ";
// console.log(str1.trim());//starting and ending spaces removed
// console.log(str1.trimStart());//starting spaces removed
// console.log(str1.trimEnd());//ending spaces removed

// console.log(str1.replace("Hello","Hi")); //Hello is replaced with Hi

// console.log(str1.includes("Hello"));

// const str2 = "Hello-World-How-Are-You";
// console.log(str2.split("-"));//Arguments are separator and limit
// console.log(str2.split("-",2));//["Hello", "World"]

const str3= "Joey Monica";
// console.log(str3.charCodeAt(4));//Returns the unicode value of the character
// console.log(str3.codePointAt(4));//Returns the acsii value of the character

console.log(str3.toUpperCase());
console.log(str3.toLowerCase());;