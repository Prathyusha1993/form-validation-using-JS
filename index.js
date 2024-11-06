
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let msgError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

const validateName = () => {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

const validatePhone = () => {
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Enter valid phone number';
        return false;
    }
    if(!phone.match(/^[0-9]*$/)){
        phoneError.innerHTML = 'only digits are allowed';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

const validateEmail = () => {
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'Enter valid email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

const validateMessage = () => {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if(left >  0){
        msgError.innerHTML = left + ' more charachters are required';
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

const validateForm = () => {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill all the required fields.';
        setTimeout(() => {submitError.style.display = 'none'}, 3000);
        return false;
    }

}