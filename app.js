console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers){
    let sum = 0
    function add(num){
        sum += num;
    }
    numbers.forEach(add);

    /*for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }*/  
    
    return sum;
};
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {
    title: "The Amber Spyglass",
    author: "Phillip Pullman",
    pages: 518,
    readCount: 5,
}

function info(){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`);
};
book.info = info;
book.info();

//book.info = `${book.title} by ${book.author}, ${book.pages} pages, read ${book.readCount} times.`;
// console.log(book.info);


