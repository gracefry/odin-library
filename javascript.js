let myLibrary = [];
const shelf = document.querySelector(".shelf");

function Book(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}

function displayBooks() {
    for (book of myLibrary) {
        let newBook = document.createElement("p");
        newBook.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.hasRead}.`;
        shelf.appendChild(newBook);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(theHobbit);
displayBooks();

