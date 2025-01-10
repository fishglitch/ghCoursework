// Define a Book class
class Book {
    title;
    author;
    isCheckedOut = false;

    constructor(providedTitle, givenAuthor) {
        this.title = providedTitle;
        this.author = givenAuthor;
    }

    toggleCheckOut() {
        this.isCheckedOut = !this.isCheckedOut;
    }
}

// Define a Library Class
class Library {
    books;

    constructor() {
        this.books = [];
    }

    addBook(givenBook) {
        this.books.push(givenBook);
    }

    listAvailableBooks() {
        const availableBooks = this.books.filter(book => !book.isCheckedOut);
        console.table(availableBooks);
    }
}

// Use your classes:

// Create an instance of Library
const seattleGrace = new Library();

// Create 3 book objects
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen");
const hungryCaterpillar = new Book("The Very Hungry Caterpillar", "Eric Carle");
const jamesGiantPeach = new Book("James and the Giant Peach", "Roald Dahl");

// Toggle the checkout status of one book
prideAndPrejudice.toggleCheckOut(); // Checking out "Pride and Prejudice"

// Add the books to instance of library
seattleGrace.addBook(prideAndPrejudice);
seattleGrace.addBook(hungryCaterpillar);
seattleGrace.addBook(jamesGiantPeach);

// Console log all available books in the library
console.log("Available books in the library:");
seattleGrace.listAvailableBooks();