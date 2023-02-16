const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';

const comment_count = document.querySelector('.comments');
const list = document.querySelector('.list');

function showComments(){
    comment_count.style.display = 'none';
    list.style.display ='block';
};

function hideComments(){
    list.style.display = 'none';
    comment_count.style.display = 'block';
};

// document.querySelector('#comments').addEventListener('click', showComments);
document.querySelector('#hide-list').addEventListener('click', hideComments);


const view_Your = document.querySelectorAll('#comments');

for(let i = 0; i < view_Your.length; i++){
        view_Your[i].addEventListener('click', showComments);
};


// function viewYourPosts(){
//     console.log('POSTS');
// }

// function viewYourComments(){
//     console.log('COMMENTS');
// }