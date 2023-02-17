const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';



function showComments(){
    comment_count.style.display = 'none';
    list.style.display ='block';
};

function hideComments(){
    list.style.display = 'none';
    comment_count.style.display = 'block';
};

