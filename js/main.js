const btnSend = document.querySelector('#button-send');
let form = document.forms.formCreate;

btnSend.addEventListener('click', createComment)

function createComment (event) {
    event.preventDefault();
    let numberOfComment = commentsCount () + 1;

    // console.log('Кнопка нажата');
    // console.log(form.elements.author.value);
    // console.log(form.elements.text.value);
    // console.log(form.elements.date.value);

    const newComment = document.createElement('div');
    newComment.className = 'section-comments-list__comment';
    newComment.id = ('comment-' + numberOfComment);
    document.getElementById('comment-block').append(newComment); 

    const newTopBlock = document.createElement('div');
    newTopBlock.className = 'section-comments-list__top';
    newTopBlock.id = ('comment-top-' + numberOfComment);
    document.getElementById('comment-' + numberOfComment).append(newTopBlock); 

    const newAvatar = document.createElement('div');
    newAvatar.className = 'section-comments-list__avatar';
    newAvatar.innerHTML = ('<img src="./img/header-login.svg" alt="" class="section-comments-list__picture">');
    document.getElementById('comment-top-' + numberOfComment).append(newAvatar); 

    const newDescribtionBlock = document.createElement('div');
    newDescribtionBlock.className = 'section-comments-list__describtion';
    newDescribtionBlock.id = ('comment-describtion-' + numberOfComment);
    document.getElementById('comment-top-' + numberOfComment).append(newDescribtionBlock); 

    const authorName = document.createElement('div');
    authorName.className = 'section-comments-list__author-name';
    authorName.innerText = form.elements.author.value;
    document.getElementById('comment-describtion-' + numberOfComment).append(authorName); 

    const commentDate = document.createElement('div');
    commentDate.className = 'section-comments-list__date';
    commentDate.innerText = form.elements.date.value;
    document.getElementById('comment-describtion-' + numberOfComment).append(commentDate); 

    const newLike = document.createElement('div');
    newLike.className = 'section-comments-list__icon';
    newLike.innerHTML = ('<svg class="section-comments-list__like" viewBox="0 0 12 12"><g><path d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1 C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z"></path></g></svg>');
    document.getElementById('comment-top-' + numberOfComment).append(newLike); 

    const newRemoveBtn = document.createElement('div');
    newRemoveBtn.className = 'section-comments-list__remove';
    newRemoveBtn.innerHTML = ('<img src="./img/comments-trash.svg" alt="" class="section-comments-list__remove">');
    document.getElementById('comment-top-' + numberOfComment).append(newRemoveBtn); 


    const commentText = document.createElement('div');
    commentText.className = 'section-comments-list__comment-text';
    commentText.innerText = form.elements.text.value;
    document.getElementById('comment-' + numberOfComment).append(commentText); 

}

let commentBlock = document.getElementById('comment-block');

function commentsCount () {
   return commentBlock.children.length
}

document.getElementById('comment-block').onclick = function(event) {
    console.log(event.target)
    if (event.target.closest('div').className == 'section-comments-list__icon') {
        console.log(event.target)
    }

    if (event.target.className != 'section-comments-list__remove') return;

    let currentComment = event.target.closest('.section-comments-list__comment');
    currentComment.remove();
};

// document.getElementById('comment-block').onclick = function(event) {
//     if (event.target.className != 'section-comments-list__icon') return;

//     console.log('currentLike')
// };

