/* Data injected into the script tag through handlebars for quicker load to edit boxes */

//  Dashboard Title
const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';

// Visible Section elements upon loading.
const visible = document.querySelectorAll('#show');

//  All three Post post and Update post/comment box
const edit_box = document.querySelector('#hide');
const box_Title = document.getElementsByName('post')[0];
const box_content = document.getElementsByName('content')[0];
const submit_btn = document.getElementById('from');

// Data attribute change for Proper hover effect
const replace_attribute = document.querySelectorAll('.post-comment', '[data-style="hover"]');
    replace_attribute.forEach(attr => {
        attr.setAttribute('data-style', 'userHov');
    });

//  Events added per post/comment section specific to each parent element during the event.
const user_list = document.querySelectorAll('#list');
    user_list.forEach(postNcomList => {
        postNcomList.firstElementChild.addEventListener('click', showList);
        postNcomList.nextElementSibling.firstElementChild.firstElementChild.addEventListener('click', hideList);
    });

function showList(e){
    let targetParent = e.target.parentNode;
    let parentNextSib = e.target.parentNode.nextElementSibling;

    targetParent.style.display = 'none';
    parentNextSib.style.display ='block';


    console.log('showList', targetParent, parentNextSib);
};

function hideList(e){
    let targetParent = e.target.parentNode.parentNode;
    let parentPrevSib = e.target.parentNode.parentNode.previousElementSibling;

    targetParent.style.display = 'none';
    parentPrevSib.style.display = 'block';

};

// Events for Editing a Post or Comment
const edit_postORcomment = document.querySelectorAll('.edit-this');
    edit_postORcomment.forEach(pORc => {
        let editType = pORc.getAttribute('id');
        if(editType === 'post'){
            pORc.addEventListener('click', editPost);
        }else{
            pORc.addEventListener('click', editComment);
        }
    });

function textarea(){
    console.log(submit_btn);
    if(submit_btn.id === 'comment'){
        box_Title.disabled = true;
    }else{
        box_Title.disabled = false;
    }
};

async function editPost(e){
    document.getElementById('box-title').innerHTML = 'Edit Post';
    submit_btn.setAttribute('id', e.target.id);

    let targetID = parseInt(e.target.children[0].children[0].id);
    // script tag injected data POSTS
    let pullPost =  POSTS.find(post => post.id === targetID);

    let info = {
        id: pullPost.id,
        title: pullPost.title,
        content: pullPost.post_text,
        poster_id: current,
    };
    textarea();
    showBox(info);
};

function editComment(e){
    document.getElementById('box-title').innerHTML = 'Edit Comment';
    submit_btn.setAttribute('id', e.target.id);

    let targetID = parseInt(e.target.children[1].children[0].id);
    // script tag injected data COMMENTS
    let pullComment =  COMMENTS.find(comment => comment.id === targetID);

    let info = {
        id: pullComment.id,
        title: pullComment.post.title,
        content: pullComment.comment_text,
        commenter_id: current,
    };    
    textarea();
    showBox(info);
};

//  Events for showing Edit Box  This listener passes its id for query upon fetch.
document.querySelector('#new-post').addEventListener('click', e => {
    submit_btn.setAttribute('id', e.target.id);

    let info = {
        title: '',
        content: '',
    };
    textarea();
    showBox(info);
});

function showBox(info){
    edit_box.style.display = 'block';
    visible.forEach(shown => {
        shown.style.display = 'none';
    });

    box_Title.value = info.title;
    box_content.value = info.content;

};

// Events for hiding the Edit box.
document.querySelector('.close-box').addEventListener('click', hideBox);

function hideBox(){
    edit_box.style.display = 'none';
    visible.forEach(shown => {
        shown.style.display = 'block';
    });

};

//  Events for Fetch function Dependant upon Event origin.
// submit_btn.addEventListener('click', retrieveFetch);

async function retrieveFetch(request){
    console.log('HELLO', submit_btn);
    // switch(submit_btn.id){
    //     case 'new-post': {
 
    //     }
    //     case 'post': {

    //     }
    //     case 'comment': {

    //     }
    // }




    // const response = await fetch('/api/comment/', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(information),
    // });

    // if (response.ok) {
    //     document.location.reload('/');
    //   }
    //    else {
    //     alert('Server Side ERROR!!!');
    //   }
};






/*  MaG33  */