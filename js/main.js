let  btnSend = document.querySelector('#button-send');
let commentBlock = document.getElementById('comment-block');
let textarea = document.getElementById('text-of-comment');
let form = document.forms.formCreate;

btnSend.addEventListener('click', function () {
    event.preventDefault();
    validationCheck('name', 2, true);
    validationCheck('text-of-comment');

    if (validationCheck('name', 2, true) && validationCheck('text-of-comment'))  {
        createComment ();
    };
});

commentBlock.addEventListener('click', function(event) {

    if (event.target.className == 'section-comments-list__like') {
        if (!event.target.getAttribute('src').includes('-active')) {

            const passiveLike = event.target.closest('div');

            const activeLike = document.createElement('div');
            activeLike.className = 'section-comments-list__icon';
            activeLike.innerHTML = '<img src="./img/comments-like-active.svg" alt="" class="section-comments-list__like">';
            passiveLike.replaceWith(activeLike);
        } else {
            const activeLike = event.target.closest('div');

            const passiveLike = document.createElement('div');
            passiveLike.className = 'section-comments-list__icon';
            passiveLike.innerHTML = '<img src="./img/comments-like.svg" alt="" class="section-comments-list__like">';
            activeLike.replaceWith(passiveLike);
        }
    };

    if (event.target.className != 'section-comments-list__remove') return;

    let currentComment = event.target.closest('.section-comments-list__comment');
    currentComment.remove();
    document.getElementById('section-hero-comments').innerText = commentsCount();
    document.getElementById('section-comment-create-counter').innerText = commentsCount();
});

textarea.addEventListener('keydown', function () {
    if (this.scrollHeight > 20) {
        this.style.cssText = 'height: auto; padding: 0';
        this.style.cssText = 'height:' + (this.scrollHeight + 6)+ 'px';
    };
    if (event.keyCode == 13) {
        event.preventDefault();
        validationCheck('name', 2, true);
        validationCheck('text-of-comment');
    
        if (validationCheck('name', 2, true) && validationCheck('text-of-comment'))  {
            createComment ();
        };
    };
});

function createComment (event) {
    let numberOfComment = commentsCount () + 1;

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
    document.getElementById('name').value = '';

    const commentDate = document.createElement('div');
    commentDate.className = 'section-comments-list__date';
    commentDate.innerText = dateUpdate(form.elements.date.value);
    document.getElementById('comment-describtion-' + numberOfComment).append(commentDate);
    document.getElementById('date').value = ''; 

    const newLike = document.createElement('div');
    newLike.className = 'section-comments-list__icon';
    newLike.innerHTML = ('<img src="./img/comments-like.svg" alt="" class="section-comments-list__like">');
    document.getElementById('comment-top-' + numberOfComment).append(newLike); 

    const newRemoveBtn = document.createElement('div');
    newRemoveBtn.className = 'section-comments-list__icon';
    newRemoveBtn.innerHTML = ('<img src="./img/comments-trash.svg" alt="" class="section-comments-list__remove">');
    document.getElementById('comment-top-' + numberOfComment).append(newRemoveBtn); 

    const commentText = document.createElement('div');
    commentText.className = 'section-comments-list__comment-text';
    commentText.innerText = form.elements.text.value;
    document.getElementById('comment-' + numberOfComment).append(commentText); 
    document.getElementById('text-of-comment').value = ''; 

    document.getElementById('section-hero-comments').innerText = commentsCount();
    document.getElementById('section-comment-create-counter').innerText = commentsCount();
    textarea.style.cssText = '20px';
};

function commentsCount () {
   return commentBlock.children.length
};

function validationCheck (id, min = 1, symbols = false) {
    let field = document.getElementById(id);

    if ((field.value.length < min) || (symbols == true)) {
        
        if (field.value.length < min) {

            document.getElementById('label-for-' + id).classList.remove('section-comment-create__error_none');
            document.getElementById('label-for-' + id).innerText = 'Длина поля слишком короткая';

            field.addEventListener('input', function () {
                document.getElementById('label-for-' + id).classList.add('section-comment-create__error_none');
            });
            return false
        };

        if (symbols == true){

            if (field.value.match(/[0-9\\.,:*$/\\!@#%^&()'"]/g) !== null) {
                document.getElementById('label-for-' + id).classList.remove('section-comment-create__error_none');
                document.getElementById('label-for-' + id).innerText = `Поле не должно содержать цифр и спецсимволов`;

                field.addEventListener('input', function () {
                    document.getElementById('label-for-' + id).classList.add('section-comment-create__error_none');
                });
                return false
            }else {
                return true
            };
        }; 

    } else {
        return true
    };
};

function dateUpdate (date) {
    let today = new Date();
    let yesterday = daysAgoCount(today, 1);

    function daysAgoCount(today, num) {
        let month = today.getMonth() + 1;
        if (month <10) {
            month='0'+ (today.getMonth() + 1);
        };
        let day = today.getDate() - num;
        if (day<10) {
            day= '0' + (today.getDate() - num);
        }
        return `${today.getFullYear()}-${month}-${day}`
    };
    function randomTime() {
        let randomHours = Math.floor(Math.random()*(24-0) + 0);
        let randomMinutes = Math.floor(Math.random()*(60-0) + 0);
        if (randomHours < 10) {
            randomHours = '0' + randomHours;
        };
        if (randomMinutes < 10) {
            randomMinutes = '0' + randomMinutes;
        };
        return `${randomHours}:${randomMinutes}`
    }


    if ((date == '') || (date == daysAgoCount(today, 0))) {
        let hours = today.getHours();
        let minutes = today.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        };
        if (minutes < 10) {
            minutes = '0' + minutes;
        };
        date = `сегодня, ${hours}:${minutes}`;
    }else if (date == yesterday) {
        date = 'вчера, ' + randomTime();
    } else {
        date = date + ', ' + randomTime();
    }

    return date
};
