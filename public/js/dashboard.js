//  Dashboard Title
const dash_Title = document.querySelector('#head-title').innerHTML = 'Dashboard';

// Visible Section elements upon loading.
const visible = document.querySelectorAll('#show');

//  All three Post post and Update post/comment box
const edit_box = document.querySelector('#hide');
const box_Title = document.getElementsByName('post')[0];
const box_content = document.getElementsByName('content')[0];

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

function editPost(e){
    let from = e.target.id;
    document.getElementById('box-title').innerHTML = 'Edit Post';

    let title = e.target.children[0].children[0].innerHTML;
    let content = e.target.children[1].children[0].innerHTML;

    let info = {
        title: title,
        content: content,
    };

    showBox(from, info);
};

function editComment(e){
    let from = e.target.id;

    document.getElementById('box-title').innerHTML = 'Edit Comment';

    let title = e.target.previousElementSibling.previousElementSibling.children[0].innerHTML;
    let comment = e.target.children[1].children[0].innerHTML;

    let info = {
        title: title,
        content: comment,
    }

    showBox(from, info);
};

// async function retrieveFetch(request){

//     const request = {
//         title: box_Title,
//         post_text: box_content,
//     };

//     console.log(request);
//     const response = await fetch('/api/comment/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(information),
//     });

//     if (response.ok) {
//         document.location.reload('/');
//       }
//        else {
//         alert('Server Side ERROR!!!');
//       }
// };

//  Events for showing Edit Box  Edits depending on input text value changes, lock on textarea, and produce data depending on path.
document.querySelector('#new-post').addEventListener('click', e => {
    let from = e.target.id;
    let info = {
        title: '',
        content: '',
    };
    showBox(from, info);
});

document.querySelector('.close-box').addEventListener('click', hideBox);

function showBox(from, info){

    // switch(from){
    //     case 'new-post': {
    //         box_Title.value = info.title;
    //         box_content.value = info.content;
    //     }
    //     case 'post': {

    //     }
    //     case 'comment': {

    //     }
    // }

    box_Title.value = info.title;
    box_content.value = info.content;

    edit_box.style.display = 'block';
    visible.forEach(shown => {
        shown.style.display = 'none';
    });
};

function hideBox(){

    edit_box.style.display = 'none';
    visible.forEach(shown => {
        shown.style.display = 'block';
    });
};


