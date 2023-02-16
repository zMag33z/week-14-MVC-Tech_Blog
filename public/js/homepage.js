const comment_count = document.querySelector('.comments');
const comment_list = document.querySelector('.comment-list');
const buttonShow = document.querySelectorAll('.open');
const buttonHide = document.querySelectorAll('.close');

function showComments(){
    comment_count.style.display = 'none';
    comment_list.style.display ='block';
};

function hideComments(){
    comment_list.style.display = 'none';
    comment_count.style.display = 'block';
};

console.log(buttonShow.length);

for(let i = 0; i < buttonShow.length; i++){
    buttonShow[i] = buttonShow.addEventListener('click', showComments);
    console.log('button')
}
// buttonShow.forEach(buttonShow => {
//     buttonShow.addEventListener('click', showComments);
// })

addEventListener('click', hideComments);

