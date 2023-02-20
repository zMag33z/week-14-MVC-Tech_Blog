// Event listeners per comment show/hide clickable text.  Specific to each parent.
const commentsTOpost = document.querySelectorAll('#list');

commentsTOpost.forEach(comments => {
    comments.firstElementChild.addEventListener('click', showComments);
    comments.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideComments);
    comments.firstElementChild.nextElementSibling.innerHTML = '[ add a comment ]';
    comments.firstElementChild.nextElementSibling.addEventListener('click', showCommentBox);
    comments.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideCommentBox);
});

function showComments(e){
    let choice = e.target.parentNode;
    let commentList = e.target.parentNode.nextElementSibling;

    choice.style.display = 'none';
    commentList.style.display = 'block';
};

function hideComments(e){
    let commentList = e.target.parentNode.parentNode;
    let choice = e.target.parentNode.parentNode.previousElementSibling;

    commentList.style.display = 'none';
    choice.style.display = 'block';
};

function showCommentBox(e){
  //will go to the post add comment button
    // const postID = e.target.parentNode.parentNode.children[0].children[0].getAttribute('id');
    // console.log('HELLO SHOW', postID);

    let choice = e.target.parentNode;
    let addCommentBox = e.target.parentNode.nextElementSibling.nextElementSibling;

    choice.style.display = 'none';
    addCommentBox.style.display = 'block';
};

function hideCommentBox(e){
    let choice = e.target.parentNode.parentNode.previousElementSibling.previousElementSibling;
    let addCommentBox = e.target.parentNode.parentNode;

    choice.style.display = 'block';
    addCommentBox.style.display = 'none';
};

//fetch request for posting comment to post