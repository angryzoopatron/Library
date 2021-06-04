const addBtn = document.querySelector('#addBtn');
const newBookBtn = document.querySelector('#newBtn');
const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];

addBtn.addEventListener('click', addBookToLibrary);
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


//Book Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value + 'pg'; 
        this.read = form.read.checked; 
    }
}

//creates book from Book Constructor, adds to library
let myLibrary = [];
let newBook;

function addBookToLibrary(event) {
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, pages,read); 
    myLibrary.push(newBook); 
    //setData();  //saves updated array in local storage
    // render(); 
    form.reset();
}