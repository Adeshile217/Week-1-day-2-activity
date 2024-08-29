let firstname = '';
let lastname = '';
let email = '';
let username = '';
let password = '';



let firstnameInput = document.getElementById('firstname');
let lastnameInput =  document.getElementById('lastname');
let emailInput = document.getElementById('email');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let submitButton = document.getElementById('submit');

firstnameInput.addEventListener('input', handleFirstnameInputChange);
lastnameInput.addEventListener('input', handleLastnameInputChange);
emailInput.addEventListener('input', handleEmailInputChange);
usernameInput.addEventListener('input', handleUsernameInputChange);
passwordInput.addEventListener('input', handlePasswordInputChange);
submitButton.addEventListener('click', handleFormSubmit);

function handleFirstnameInputChange(event){
    firstname = event.target.value;
}
function handleLastnameInputChange(event){
    lastname = event.target.value;
}
function handleEmailInputChange(event){
    email = event.target.value;
}
function handleUsernameInputChange(event){
    username = event.target.value;
}
function handlePasswordInputChange(event){
    password = event.target.value;
}
function handleFormSubmit(event){
    event.preventDefault();

    alert("Thank you" + " " + firstname + ",Your Username is" + " " + username );
    // console.log(event)
} 