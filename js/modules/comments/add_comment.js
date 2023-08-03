export function send (inputComment, outputContainer) {

    // getting user data and time

    const userName = localStorage.getItem("name");
    const currentTimestamp = new Date().toLocaleString(); 

    // converting timestamp to date format

    

    // execute function creating comment block

    const comment = getComment(currentTimestamp, userName, inputComment.value);

    // creating container for the comment

    const commentContainer = document.createElement('div');
    commentContainer.classList.add("output__user");

    // putting the created comment block into container

    commentContainer.innerHTML = comment;

    if (inputComment.value.length != 0) {
      outputContainer.appendChild(commentContainer);
    }
}

function getComment(currentTimestamp, userName, commentText) {
    return `<div class="output__user-likes">
      <div class="output__user-likes-plus">
        <img src="/images/icon-plus.svg" alt="plus">
      </div>
      <div class="output__user-likes-count">0</div>
      <div class="output__user-likes-minus">
        <img src="/images/icon-minus.svg" alt="minus">
      </div>
    </div>
    <div class="output__user-comment">
      <div class="output__user-comment-avatar">
        <img src="/images/avatars/image-amyrobson.png" alt="avatar">
      </div>
      <div class="output__user-comment-name">${userName}</div>
      <div class="output__user-comment-time">${currentTimestamp}</div>
      <div class="output__user-comment-reply">
        <img src="/images/icon-reply.svg" alt="reply">
        <span>Reply</span>
      </div>
      <div class="output__user-comment-text">${commentText}</div>
    </div>
  </div>`
}