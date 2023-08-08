// imports

import { validation } from "./modules/validation.js";
import { send } from "./modules/comments/comment.js";

// Getting validation and input sections

const form = document.querySelector('.validation');
const input = document.querySelector('.input');

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
    form.classList.add('hidden')
    input.classList.remove('hidden')
    localStorage.setItem("name", nameInput.value)
})


// ADD COMMENT FUNCTION

// getting the "send" btn

const sendBtn = document.querySelector('.input__logged-user-btn');

// getting the output container 

const outputContainer = document.querySelector('.output__container');

// getting the textarea element from input block

const inputComment = document.getElementById('input-textarea');

// send onlick event

sendBtn.onclick = function commenting () {

    // send comment function

    send(inputComment, outputContainer)

};




// REPLY FUNCTION



// 1. Створити функцію яка буде вертати HTML з полем вводу
// 2. Створити хенждер на реплай, який буде замінювати блок з полем вводу на блок з комментом.