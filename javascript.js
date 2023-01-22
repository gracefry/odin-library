let myLibrary = [];
const shelf = document.querySelector(".shelf");
const formDiv = document.querySelector(".form-popup");
const form = document.querySelector("#form");
const openButton = document.getElementById("open-form");
const closeButton = document.getElementById("close-form");
const addButton = document.getElementById("add-book");

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
    // Clear existing display
    if (shelf.hasChildNodes) {
        shelf.replaceChildren();
    }

    // Loop
    for (book of myLibrary) {
        // Checkbox
        let read = "unread";
        if (book.hasRead) {
            read = "read";
        }

        let newBook = document.createElement("p");
        newBook.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${read}.`;
        shelf.appendChild(newBook);
    }
}

function openForm() {
    formDiv.style.display = "flex";
}

function closeForm() {
    formDiv.style.display = "none";
}

openButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get values from form
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let book = new Book(author, title, pages, read);
    addBookToLibrary(book);
    displayBooks();
});


