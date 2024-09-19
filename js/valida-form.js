const errorName = document.getElementById('name-error');
const errorEmail = document.getElementById('email-error');
const errorSubmit = document.getElementById('submit-error');
const errorMessage = document.getElementById('message-error');


function validateName() {

    let name = document.getElementById('name').value;

    if (name.length <= 3) {
        errorName.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/
    )) {
        errorName.innerHTML = 'Enter Full Name';
        return false;
    }

    errorName.innerHTML = '<i class="ri-checkbox-circle-fill" style="color:green;"></i>';
    return true;
}

function validateEmail() {

    let email = document.getElementById('email').value;

    if (email.length == 0) {
        errorEmail.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        errorEmail.innerHTML = 'Email Invalid';
        return false;
    }

    errorEmail.innerHTML = '<i class="ri-checkbox-circle-fill" style="color:green;"></i>';
    return true;
}

function validateMessage() {

    let message = document.getElementById('message').value;

    if (message.length == 0) {
        errorMessage.innerHTML = 'message is required';
        return false;
    }

    if (!message.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/

    )) {
        errorMessage.innerHTML = 'Enter message ';
        return false;
    }

    if (message.length <= 30) {
        errorMessage.innerHTML = 'message  Length min 30';
        return false;
    }
    errorMessage.innerHTML = '<i class="ri-checkbox-circle-fill" style="color:green;"></i>';
    return true;
}

function valdidateform() {
    if (!validateName() || !validateEmail() || !validateMessage()) {

        errorSubmit.style.display = 'block';
        errorSubmit.innerHTML = 'Please Fil required Fields';
        setTimeout(function () { errorSubmit.style.display = 'none'; }, 3000);

        return false;
    }
}

