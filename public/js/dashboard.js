const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';

const comment_count = document.querySelector('.comments');
const comment_list = document.querySelector('.comment-list');

function showComments(){
    comment_count.style.display = 'none';
    comment_list.style.display ='block';
};

function hideComments(){
    comment_list.style.display = 'none';
    comment_count.style.display = 'block';
};

document.querySelector('#comments').addEventListener('click', showComments);
document.querySelector('#hide-list').addEventListener('click', hideComments);