// Event listeners per comment show/hide clickable text.  Specific to each parent.
const commentsTOpost = document.querySelectorAll('.comments');
const add_comment = document.querySelectorAll('.edit');

commentsTOpost.forEach(comments => {
    comments.firstElementChild.addEventListener('click', showComments);
    comments.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideComments);
})

add_comment.forEach(add => {
    add.innerHTML = '[ add a comment ]';
})

function showComments(e){
    let targetParent = e.target.parentNode;
    let parentNextSib = e.target.parentNode.nextElementSibling;

    targetParent.style.display = 'none';
    parentNextSib.style.display = 'block';
};

function hideComments(e){
    let targetParent = e.target.parentNode.parentNode;
    let parentPrevSib = e.target.parentNode.parentNode.previousElementSibling;

    targetParent.style.display = 'none';
    parentPrevSib.style.display = 'block';
};
