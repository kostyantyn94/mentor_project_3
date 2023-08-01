// imports

import { validation } from "./modules/validation.js";
import { send } from "./modules/sendComment.js";

// Getting all sections

const form = document.querySelector('.validation');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

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
})

// COMMENT FUNTION

// getting the "send" btn

const sendBtn = document.querySelector('.input__logged-user-btn');

// getting the template for the comments blocks

const commentBlock = document.querySelector('.output__user');

// getting the output container 

const outputContainer = document.querySelector('.output__container');

// getting the textarea element from input block

const inputComment = document.getElementById('input-textarea')

// send button event

sendBtn.onclick = () => {
    send(commentBlock, inputComment, outputContainer)
};