//  First Onload
//  Hide add comment link if not logged in. Current is current user id.
window.onload = function (){
    const add_comment = document.querySelectorAll('.edit');
    let current = document.getElementById('relevant').value;

    if(!current){
        add_comment.forEach(addBtn => {
            addBtn.style.display = 'none';
        });
    };
};

// Event listeners per comment show/hide clickable text.  Specific to each parent.
const commentsTOpost = document.querySelectorAll('#list');

//  For each one of these sections add a listener where needed.
commentsTOpost.forEach(comments => {
    comments.firstElementChild.addEventListener('click', showComments);
    comments.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideComments);
    comments.firstElementChild.nextElementSibling.innerHTML = '[ add a comment ]';
    comments.firstElementChild.nextElementSibling.addEventListener('click', showCommentBox);
    comments.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideCommentBox);
});
//  All comment lists within each Post.
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

//  Add comment to post box.
function showCommentBox(e){
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

//  Events for fetch request- Posting comment to post
const post_comment = document.querySelectorAll('.btn');
    post_comment.forEach(btn => {
        btn.addEventListener('click', commentTOdatabase);
    });

async function commentTOdatabase(e){
    let information = {
        post_id: e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].id,
        comment_text: e.target.parentElement.previousElementSibling.children[0].value
    };

    const response = await fetch('/api/comment/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(information),
    });

    if (response.ok) {
        document.location.reload('/');
      }
       else {
        alert('Server Side ERROR!!!');
      }
};


/*  MaG33  */