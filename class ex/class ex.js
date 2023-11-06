function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Testing the functions
const celsiusValue = 25;
const fahrenheitValue = 77;

const convertedFahrenheit = celsiusToFahrenheit(celsiusValue);
const convertedCelsius = fahrenheitToCelsius(fahrenheitValue);

console.log(${celsiusValue} degrees Celsius is ${convertedFahrenheit} degrees Fahrenheit.);
console.log(${fahrenheitValue} degrees Fahrenheit is ${convertedCelsius} degrees Celsius.);


2

function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

// Testing the function
const num1 = 5;
const num2 = 0;
const num3 = 10;

const factorial1 = calculateFactorial(num1);
const factorial2 = calculateFactorial(num2);
const factorial3 = calculateFactorial(num3);

console.log(The factorial of ${num1} is ${factorial1});
console.log(The factorial of ${num2} is ${factorial2});
console.log(The factorial of ${num3} is ${factorial3});


3

function applyCallbackToNumbers(numbers, callback) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(callback(numbers[i]));
    }

    return result;
}

// Example callback function to double a number
function doubleNumber(number) {
    return number * 2;
}

const numbers = [1, 2, 3, 4, 5];

// Applying the callback function to double each number in the array
const doubledNumbers = applyCallbackToNumbers(numbers, doubleNumber);

console.log(doubledNumbers); 

4
const Library = {
    books: [],
    
    addBook(title, author, isRead = false) {
        const newBook = {
            title: title,
            author: author,
            isRead: isRead,
        };
        this.books.push(newBook);
    },

    deleteBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    },

    displayReadBooks() {
        const readBooks = this.books.filter(book => book.isRead);
        return readBooks;
    },
};

// Adding books to the library
Library.addBook("Book 1", "Author 2");
Library.addBook("Book 2", "Author 1");
Library.addBook("Book 3", "Author 3", true);
Library.addBook("Book 4", "Author 5", true); 

// Deleting a book
Library.deleteBook("Book 1");

// Displaying all read books
const readBooks = Library.displayReadBooks();
console.log(readBooks)

5
const person = {
    name: marvelous,
    age: 18,
    occupation: MediaStreamAudioDestinationNode
};

cosnt [name, age ] = person;
 console.log (name);
 console.log(age);