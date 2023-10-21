const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    validateInputs()
})

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Username is required');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length <= 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === "") {
        setError(confirmPassword, "Please confirm your password");
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    } else {
        setSuccess(confirmPassword)
    }
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}