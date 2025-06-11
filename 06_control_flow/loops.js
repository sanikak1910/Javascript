// for..of loop
//Iterates over iterable objects like arrays, strings, etc.
const array = [1, 2, 3, 4, 5];
for (const num of array) {
    // console.log(num);
}

const str = "Hello World";
for (const char of str) {
    // console.log(char);
}

//Maps 
//Object that store key-value pairs. Unique values for keys are stored.
// No duplicate keys are allowed.
const map = new Map()
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':',value);
}
const myObj = {
    name: 'Brews Coffee',
    address: 'Street-30',
    city: 'New York',
    owner: 'Aditya'
}
// for (const [key,value] of myObj) {
//     console.log(key, ':', value);//Gives error because myObj is not iterable
// }
//for..in loop
//Iterates over enumerable properties of an object
for (const key in myObj) {
    // console.log(myObj[key]);
}
// for..in loop with arrays
const arr = [1, 2, 3, 4, 5];
for (const key in arr) {
    //Here key is the index of the array(start from 0)
    // console.log(key,":", arr[key]);
}
for (const key in map) {
    //Here key is the key of the map
    // console.log(key, ":", map[key]); 
    //Gives nothing because map is not iterable
}

//for..each loop
const coding = ['JavaScript', 'Python', 'Java', 'C++'];
// coding.forEach((lang) => {
//     console.log(lang);
// })

// coding.forEach(function (lang) {
//     console.log(lang);
// })

// function printLang(lang) {
//     console.log(lang);
// }
// coding.forEach(printLang);

// coding.forEach((lang, index,arr) => {
//     console.log(index, lang,arr);
// })

const myCoding = [
    {
        name: 'JavaScript',
        type: 'Scripting Language'
    },
    {
        name: 'Python',
        type: 'Programming Language'
    },
    {
        name: 'Java',
        type: 'Programming Language'
    },
    {
        name: 'C++',
        type: 'Programming Language'
    }
]
myCoding.forEach((lang) => {
    // console.log(lang.name,lang.type);
    // console.log(lang)
})
