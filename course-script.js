const hambar = document.querySelector('.hambar');
const mobileNavBar = document.querySelector('.mobile-nav-bar');


let isShowing = 0;
hambar.addEventListener('click', () => {
    if(isShowing) {
        mobileNavBar.classList.add('hide');
        isShowing = 0;
    } else {
        mobileNavBar.classList.remove('hide');
        isShowing = 1;
    }
})