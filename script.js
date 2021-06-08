const addBtn = document.querySelector('#addBtn');
const newBtn = document.querySelector('#newBtn');
const popUpForm = document.getElementById('popUp');
const closePopup = document.getElementsByTagName('span')[0];


function testFunction(){
    console.log('fuck');
}

addBtn.addEventListener('click', testFunction);
newBtn.addEventListener('click', () => popUpForm.style.display = 'block');
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

//  https://github.com/CatQueenCodes/Project-Library

// referencing that for notes because I am an idiot