// global objects

const userName = localStorage.getItem("name");


// creating reply block

function getHtmlForReplyActive () {
  return `<div class="reply-active__container">
  <div class="reply-active__logged-user">
    <div class="reply-active__logged-user-avatar">
      <img src="/images/avatars/image-juliusomo.png" alt="avatar">
    </div>
    <div class="reply-active__logged-user-text">
      <textarea name="logged-user-text" id="reply-active-textarea" placeholder="Add a reply..." cols="20"
        rows="10"></textarea>
    </div>
    <button class="reply-active__logged-user-btn send-reply-button">Reply</button>
  </div>
</div>`
}

function getHtmlforReply (userName, replyComment) {
  return `<div class="reply__user">
  <div class="reply__user-likes">
    <div class="reply__user-likes-plus">
      <img src="/images/icon-plus.svg" alt="plus">
    </div>
    <div class="reply__user-likes-count">0</div>
    <div class="reply__user-likes-minus">
      <img src="/images/icon-minus.svg" alt="minus">
    </div>
  </div>
  <div class="reply__user-comment">
    <div class="reply__user-comment-avatar">
      <img src="/images/avatars/image-amyrobson.png" alt="avatar">
    </div>
    <div class="reply__user-comment-name">${userName}</div>
    <div class="reply__user-comment-time">${new Date().toLocaleString()}</div>
    <div class="reply__user-comment-reply">
      <img src="/images/icon-reply.svg" alt="reply">
      <span>Reply</span>
    </div>
    <div class="reply__user-comment-text">${replyComment}
    </div>
  </div>
</div>`
}
function validateReply(replyComment) {
  let errorText = '';

  if(replyComment.length < 10) {
    errorText = "Cooment can't contain less than 10 characters"
  }
  else if(replyComment.length > 250) {
    errorText = "Cooment can't contain more than 250 characters"
  }
  return errorText;
}
function createErrorBlock(error) {
  let ErrorBlock = document.createElement('div');
  ErrorBlock.classList.add('reply-active_logged-user-error');
  ErrorBlock.innerHTML = error;
  const ErrorBlockStyle = "font-size: 16px; text-align: center; color: red; display: inline-block;";
  ErrorBlock.style.cssText = ErrorBlockStyle;
  return ErrorBlock
}
// reply btn function
function sendReply(event) {
  if(event.target.classList.contains('send-reply-button')) {

    console.log('send reply button clicked')

    // getting text-area value
    const replyComment = document.getElementById('reply-active-textarea').value;

    //replace active-reply block with reply block
    
     event.target.parentElement.parentElement.innerHTML = getHtmlforReply(userName, replyComment)
  }
  else {
    console.log('wrong element clicked')
  }
}

// function which runs when reply button pressed

const reply = (parent) => {
  // creating block with the container
  const replyWrapper = document.createElement('div');
  replyWrapper.classList.add("reply-active");
  // putting html conent into element
  replyWrapper.innerHTML = getHtmlForReplyActive();
  // adjust click event on reply block
  replyWrapper.addEventListener('click', sendReply);
  // puting reply block after comment container
  parent.after(replyWrapper)
}

// function which generates id

function getNewCommentId() {
  const currentComments = document.querySelectorAll('.output__user');
  return currentComments.length + 1;
}

export function send (inputComment, outputContainer) {

    // getting user data and time

    
    const currentTimestamp = new Date().toLocaleString(); 

    // execute function creating comment block

    const comment = getComment(currentTimestamp, userName, inputComment.value);

    // creating container for the comment
    const commentContainer = document.createElement('div');
    // adding classes for container of comment
    commentContainer.classList.add("output__user");
    // adding id to the container of comment
    const commentId = getNewCommentId();
    commentContainer.setAttribute('id', commentId);
    // adding click event to the container
    commentContainer.addEventListener('click', (event) => {
      // if user clicks on reply-element, then reply function will be executed
      if (event.target.classList.contains('send-element')) {
        // reply function
        reply(commentContainer)
      }
    })

    // putting the created comment block into container

    commentContainer.innerHTML = comment;

    if (inputComment.value.length != 0) {
      outputContainer.appendChild(commentContainer);
    }
}

// function that creates the html code for the comment block

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
      <div class="output__user-comment-reply send-element">
        <img src="/images/icon-reply.svg" alt="reply" class="send-element">
        <span class="send-element">Reply</span>
      </div>
      <div class="output__user-comment-text">${commentText}</div>
    </div>
  </div>`
}


