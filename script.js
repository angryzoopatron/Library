// button variables for event listeners
const library = document.querySelector('#lib-container');
const addBtn = document.querySelector('#addBtn');
const newBookBtn = document.querySelector('#newBtn');
const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];

//Book Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// library array for books
let myLibrary = [];

// new book from constructor
let newBook = new Book();

// function to push book object to array
function addBookToLibrary() {
    popUpForm.style.display = 'none';

    newBook = {
        title: form.title.value,
        author: form.author.value,
        pages: form.pages.value,
        read: form.read.checked,
    }


    myLibrary.push(newBook);
    //setData();
    // displayBooks();
    library.dispatchEvent(new CustomEvent('libUpdated'))
    form.reset();
}

//Creates book visual in browser
function displayBooks() {
    const display = document.getElementById('lib-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i of myLibrary) {
        createBook(i);
    }
}

//creates book DOM elements, to use in displayBooks();
function createBook(item) {
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');


    bookDiv.classList.add('book');
    titleDiv.classList.add('title');
    authDiv.classList.add('author');
    pageDiv.classList.add('pages');
    readBtn.classList.add('readBtn')

    bookDiv.setAttribute('id', myLibrary.indexOf(item));
    removeBtn.setAttribute('id', 'removeBtn');

    titleDiv.textContent = item.title;
    authDiv.textContent = item.author;
    pageDiv.textContent = item.pages;
    removeBtn.textContent = 'Remove';

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authDiv);
    bookDiv.appendChild(pageDiv);
    bookDiv.appendChild(readBtn);

    if (item.read === false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = 'red';
    } else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = 'green'
    }

    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    // remove book from DOM via splice from index
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        //setData()
        //displayBooks();
        library.dispatchEvent(new CustomEvent('libUpdated'))

    });

    // toggle read status onClick
    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        // setData();
        // displayBooks();
        library.dispatchEvent(new CustomEvent('libUpdated'))
    });
};

// local storage needs objects converted to properly store data, json.stringify does so
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

// restores state from local storage
function restore() {
    if (!localStorage.myLibrary) {
        // displayBooks();
        library.dispatchEvent(new CustomEvent('libUpdated'))

    } else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        //displayBooks();
        library.dispatchEvent(new CustomEvent('libUpdated'))
    }
}

// event listeners
addBtn.addEventListener('click', addBookToLibrary);
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

// will add dispatch below this comment to loosen coupling

library.addEventListener('libUpdated', displayBooks);
library.addEventListener('libUpdated', setData);

// restore function
restore();
