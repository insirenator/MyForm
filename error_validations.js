const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');

const emailError = document.querySelector('#email-error');
const mobileError = document.querySelector('#mobile-error');

email.addEventListener('blur', () => {
	const enteredEmail = email.value;

	if(!isValidEmail(enteredEmail)) {
		if(emailError.classList.contains('hide'))
			emailError.classList.remove('hide');
	}
	else {
		emailError.classList.add('hide');
	}
});

mobile.addEventListener('blur', () => {
	const enteredPhoneNumber = mobile.value;

	if(!isValidPhoneNumber(enteredPhoneNumber)) {
		if(mobileError.classList.contains('hide'))
			mobileError.classList.remove('hide');
	}
	else {
		mobileError.classList.add('hide');
	}
});

