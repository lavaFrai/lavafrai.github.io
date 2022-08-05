function onFooterCallback(e) {
    let clicked = e.target;
    
    if (clicked.tagName != "svg") {
        clicked = clicked.parentElement;
    }

    let notClicked;
    if (clicked.classList.contains('callback-footer-form-button-good')) {
        notClicked = document.querySelector('.callback-footer-form-button-bad');
        notClicked.classList.remove('callback-footer-form-button-bad');
        clicked.classList.remove('callback-footer-form-button-good');
    }
    else {
        notClicked = document.querySelector('.callback-footer-form-button-good');
        notClicked.classList.remove('callback-footer-form-button-good');
        clicked.classList.remove('callback-footer-form-button-bad');
    }


    notClicked.classList.add('callback-footer-form-button-hided');
    clicked.classList.add('callback-footer-form-button-selected');

    notClicked.removeEventListener('click', onFooterCallback);
    clicked.removeEventListener('click', onFooterCallback);
}


var footer_callback_buttons = document.querySelectorAll(".callback-footer-form-button");

for (var i = 0; i < footer_callback_buttons.length; i++) {
    footer_callback_buttons[i].addEventListener("click", onFooterCallback);
}