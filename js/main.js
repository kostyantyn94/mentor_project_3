// imports

import { validation } from "./validation.js";

// NAME VALIDATION

// geting consts for name input and validation btn

const nameInput = document.querySelector('.validation__name');
const nameBtn = document.querySelector('.validation__btn');

// disabling validation btn 

nameBtn.disabled = true

// validation function

validation(nameInput, nameBtn)

// btn function

nameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
})
