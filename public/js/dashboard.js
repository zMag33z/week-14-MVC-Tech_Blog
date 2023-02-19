//  Dashboard Title
const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';

// Data attribute change
const replace_attribute = document.querySelectorAll('.post-comment', '[data-style="hover"]');
    replace_attribute.forEach(attr => {
        attr.setAttribute('data-style', 'userHov');
    });

//  Event listeners added per post/comment section
const user_list = document.querySelectorAll('.comments');
    user_list.forEach(postNcomList => {
        postNcomList.firstElementChild.addEventListener('click', showComments);
        postNcomList.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideComments);
    });

function showComments(e){
    let targetParent = e.target.parentNode;
    let parentNextSib = e.target.parentNode.nextElementSibling;

    targetParent.style.display = 'none';
    parentNextSib.style.display ='block';
};

function hideComments(e){
    let targetParent = e.target.parentNode.parentNode;
    let parentPrevSib = e.target.parentNode.parentNode.previousElementSibling;

    targetParent.style.display = 'none';
    parentPrevSib.style.display = 'block';
};

//  Event listeners for showing Edit Box  Edits depending on input text value changes, lock on textarea, and produce data depending on path.
document.querySelector('#new-post').addEventListener('click', showBox);
document.querySelector('#hide').addEventListener('click', hideBox);

function showBox(e){
    let edit_box = e.target.parentNode.previousElementSibling;
    edit_box.style.display = 'block';
};

function hideBox(e){
    let edit_box = e.target.parentNode.parentNode;
    edit_box.style.display = 'none';
};