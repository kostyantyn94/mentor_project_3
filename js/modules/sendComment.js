export function send (commentBlock, inputComment, outputContainer) {
    if (inputComment.value.length != 0) {
        const newCommentBlock = commentBlock.cloneNode(true);
        let outputComment = newCommentBlock.querySelector('.output__user-comment').querySelector('.output__user-comment-text');
        outputComment.textContent = inputComment.value;
        newCommentBlock.classList.toggle('hidden')
        outputContainer.appendChild(newCommentBlock);
    }
}