const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = numbers.filter((num) => num > 4)
//If you want to use the arrow function with curly braces, you need to use the return statement.
const newNums = numbers.filter((num) => {
    return num > 4
});
// console.log(newNums); // [5, 6, 7, 8, 9, 10]

// const newNums2  = []
// numbers.forEach( (num) => {
//     if(num>4){
//         newNums2.push(num);
//     }
// })
// console.log(newNums2); // [5, 6, 7, 8, 9, 10]

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction"
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Classic"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Fiction"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Romance"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy"
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        year: 1953,
        genre: "Science Fiction"
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        year: 2005,
        genre: "Historical Fiction"
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        year: 1851,
        genre: "Adventure"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        genre: "Philosophical Fiction"
    }
];
// Filter books published after 1950 and genre is Fiction
let recentBooks = books.filter((bk) => bk.year > 1950 && bk.genre === "Fiction");

//Returns all fiction books
recentBooks = books.filter((bk) => {
    return bk.genre.includes("Fiction");
});

// console.log(recentBooks);

const numbers2 = numbers.map((num) => num + 10);
// console.log(numbers2); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//Chain methods
const numbers3 = numbers
    .map((num) => num * 10)
    .map((num) => num + 5)
    .filter((num) => num > 50);
// console.log(numbers3); // [55, 65, 75, 85, 95, 105, 115, 125, 135, 145]

//Reduce method
const myNums = [1, 2, 3]

// const sum = myNums.reduce(function (acc,curVal){
//     console.log(`Accumalator ${acc}, Current Value ${curVal}`);
//     return acc + curVal;
// },3);// // 3 is the initial value of the accumulator

const sum = myNums.reduce((acc, curVal) => acc + curVal, 0);
// console.log(sum); 

const shoppingCart = [
    { item: "Apple", price: 1.5, quantity: 3 },
    { item: "Banana", price: 0.5, quantity: 6 },
    { item: "Orange", price: 1.0, quantity: 4 },
    { item: "Mango", price: 2.0, quantity: 2 }
]
// Calculate total price of items in the shopping cart
const totalPrice = shoppingCart.reduce( (acc, item)=>{
    return acc +(item.price *item.quantity);
},0)
console.log(totalPrice); // 15.5