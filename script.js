const addBtn = document.querySelector('#addBtn');
const newBtn = document.querySelector('#newBtn');
const popUpForm = document.getElementById('popUp');
const closePopup = document.getElementsByTagName('span')[0];


function testFunction() {
    console.log('poo');
}

class Book {
    constructor(title) {
        this.title = form.title.value;
    }
}

let library = [];
let book;

// create function to push books to library array
function addBookToLibrary(e) {
    e.preventDefault;
    popUpForm.style.display = 'none';
    book = new Book(title);
    library.push(book);

    form.reset();
}

function displayBooks() {
    const display = document.getElementById('lib-container');
    const books = document.querySelector('.book')
}

function createBook() {

}


addBtn.addEventListener('click', testFunction);
newBtn.addEventListener('click', () => popUpForm.style.display = 'block');
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');





//  https://github.com/CatQueenCodes/Project-Library

// referencing that for notes because I am an idiot
