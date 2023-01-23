let myLibrary = [];
const shelf = document.querySelector(".shelf");
const formDiv = document.querySelector(".form-popup");
const form = document.querySelector("#form");
const editForm = document.querySelector("#edit-form");
const openButton = document.getElementById("open-form");
const closeButton = document.getElementById("close-form");
const addButton = document.getElementById("add-book");
const backdrop = document.getElementById('backdrop')
let readButtonsArray = [];
let deleteButtonsArray = [];

function toggleModal(e) {
    e.preventDefault();
    const modalDiv = document.querySelector('.popup-modal');
    const backdrop = document.querySelector('.backdrop')
    modalDiv.classList.toggle('show');
    backdrop.classList.toggle('show');
}

function Book(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
}

function getRead(book) {
    return book.hasRead;
}

function setRead(book, bool) {
    book.hasRead = bool;
}

function displayBooks() {
    // Clear existing display
    if (shelf.hasChildNodes) {
        shelf.replaceChildren();
    }

    // Loop
    for (book of myLibrary) {
            // Make DOM elements
        let newBook = document.createElement("div");
        newBook.classList.add("book");

        let readQuery = "unread";
        let readEmoji = "📕";

        if (getRead(book) == true) {
            readQuery = "read";
            readEmoji = "📖"
        }
        newBook.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${readQuery}`;
        
            // Make buttons
            let bookButtons = document.createElement("div");
            bookButtons.classList.add("book-buttons");

            let readButton = document.createElement("button");
            readButton.classList.add("read-button");
            readButton.setAttribute("data", `${myLibrary.indexOf(book)}`);
            readButton.textContent = readEmoji;
            readButton.addEventListener("click", (e) => {
                let index = e.target.getAttribute("data");
                if (getRead(myLibrary[index])) {
                    setRead(myLibrary[index], false);
                } else {
                    setRead(myLibrary[index], true);
                }

                readButton.textContent = readEmoji;
                displayBooks();
            });
            readButtonsArray.push(readButton);
            bookButtons.append(readButton);

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.setAttribute("data", `${myLibrary.indexOf(book)}`);
            deleteButton.textContent = "🗑️";
            deleteButton.addEventListener("click", (e) => {
                let index = e.target.getAttribute("data");
                myLibrary.pop(index);
                displayBooks();
            });
            deleteButtonsArray.push(deleteButton);
            bookButtons.append(deleteButton);

        newBook.appendChild(bookButtons);   
        shelf.appendChild(newBook);          
        }
}

openButton.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get values from form
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    // Make book
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);

    displayBooks();
});

