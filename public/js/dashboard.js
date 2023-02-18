const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';

const user_list = document.querySelectorAll('.comments');

user_list.forEach(postNcomList => {

    console.log('each', postNcomList.firstElementChild);
    postNcomList.firstElementChild.addEventListener('click', showComments);
    postNcomList.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideComments);
})

function showComments(e){
    let targetParent = e.target.parentNode;
    let parentNextSib = e.target.parentNode.nextElementSibling;

    targetParent.style.display = 'none';
    parentNextSib.style.display ='block';
};

function hideComments(e){
    console.log(e.target.parentNode)

    let targetParent = e.target.parentNode.parentNode;
    let parentPrevSib = e.target.parentNode.parentNode.previousElementSibling;

    targetParent.style.display = 'none';
    parentPrevSib.style.display = 'block';
};

