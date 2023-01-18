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
        let read = "unread";

        if (book.hasRead) {
            read = "read";
        }

        let newBook = document.createElement("p");
        newBook.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${read}.`;
        shelf.appendChild(newBook);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(theHobbit);
displayBooks();

const form = document.querySelector(".form-popup");
const openButton = document.getElementById("open-form");
const closeButton = document.getElementById("close-form");
const addButton = document.getElementById("add-book");


function openForm() {
    form.style.display = "flex";
}

function closeForm() {
    form.style.display = "none";
}

openButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
addButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let book = new Book(author, title, pages, read);
    addBookToLibrary(book);
    displayBooks();
});



