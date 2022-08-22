const PasswordField = document.querySelector('#PasswordFiled')
const BntPasswordView = document.querySelector('#bnt-password-view')
BntPasswordView.addEventListener('click', () => {
    toggle(PasswordField)
});

function toggle(PasswordField){PasswordField.type=(PasswordField.type=="password")?"text":"password";}