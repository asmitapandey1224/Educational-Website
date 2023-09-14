const signIn  = document.querySelector('.sign-in');
const signUp  = document.querySelector('.sign-up');
const signInBodyPart  = document.querySelector('.sign-in-body-part');
const signUpBodyPart  = document.querySelector('.sign-up-body-part');

signIn.addEventListener('click', () => {
    signUp.classList.remove('show');
    signIn.classList.add('show');

    signUpBodyPart.classList.add('hide');
    signInBodyPart.classList.remove('hide');
})

signUp.addEventListener('click', () => {
    signUp.classList.add('show');
    signIn.classList.remove('show');

    signUpBodyPart.classList.remove('hide');
    signInBodyPart.classList.add('hide');
})