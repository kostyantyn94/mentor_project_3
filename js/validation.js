// Creat div block which will contain error code and adjust class and style for this block

function createErrorBlock() {
    const errorBlock = document.createElement('div');
    const errorBlockStyle = "grid-row: 3 / 4; font-size: 18px; height: 40px; text-align: center; color: red; display: inline-block; padding: 8px"
    errorBlock.classList.add('validation__error');
    errorBlock.style.cssText = errorBlockStyle;
    return errorBlock
}

// Validation function

export function validation (input, btn) {
    const errorBlock = createErrorBlock()
    input.after(errorBlock);
    input.addEventListener('input', () => {
        if (input.value.length == 0 ) {
            errorBlock.innerHTML = "Name field can't be empty";
        }
        else if ((/.*?[\W\d]+.*/.test(input.value))) {
            errorBlock.innerHTML = "Name should only contain letters";
        }
        else if (input.value.length > 30) {
            errorBlock.innerHTML = "Name should not contain more than 30 characters";
        }
        else if (input.value.length < 2) {
            errorBlock.innerHTML = "Name should not contain less than 2 characters";
        }
        else {
            errorBlock.innerHTML = '';
            btn.disabled = false;
        }
    })
}


