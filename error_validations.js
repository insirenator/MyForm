// On Spot Email and Phone Number Check
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');

const emailError = document.querySelector('#email-error');
const mobileError = document.querySelector('#mobile-error');

email.addEventListener('blur', () => {
	const enteredEmail = email.value;

	if(!isValidEmail(enteredEmail)) {
		if(emailError.classList.contains('hide'))
			emailError.classList.remove('hide');
		email.style.border = "2px solid red";
	}
	else {
		emailError.classList.add('hide');
		email.style.border = "none";
	}
});

mobile.addEventListener('blur', () => {
	const enteredPhoneNumber = mobile.value;

	if(!isValidPhoneNumber(enteredPhoneNumber)) {
		if(mobileError.classList.contains('hide'))
			mobileError.classList.remove('hide');
		mobile.style.border = "2px solid red";
	}
	else {
		mobileError.classList.add('hide');
		mobile.style.border = "none";
	}
});

// On Spot First and Last Name Check
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');

const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');

firstName.addEventListener('blur', () => {
	if(!firstName.value){
		if(firstNameError.classList.contains('hide'))
			firstNameError.classList.remove('hide');
		firstName.style.border = "2px solid red";
	}
	else {
		firstNameError.classList.add('hide');
		firstName.style.border = "none";
	}
});

lastName.addEventListener('blur', () => {
	if(!lastName.value){
		if(lastNameError.classList.contains('hide'))
			lastNameError.classList.remove('hide');
		lastName.style.border = "2px solid red";
	}
	else {
		lastNameError.classList.add('hide');
		lastName.style.border = "none";
	}
});

