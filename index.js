// THE MAIN SCRIPT

// Stores the all users data
let userRecord = function() {
	let record = localStorage.getItem('userRecord');

	if (record === null) {
		localStorage.setItem('userRecord', "[]");
		return [];
	}

	return JSON.parse(record);
}();

// HTML Elements
const form = document.querySelector('#data-form');
const data_el = document.querySelector('.data');
const submitBtn = document.querySelector('#submit-btn');
const showDetailsBtn = document.querySelector('#show-users');
const hideDetailsBtn = document.querySelector('#hide-users');

// Submit Button Event Listener
submitBtn.addEventListener('click', (e) => {
	// prevent form submission
	e.preventDefault();

	// show the form values
	const formData = new FormData(form);
	const values = [...formData.entries()];
	console.log(values);

	// Convert to object
	const valuesObj = Object.fromEntries(values);

	// Validation Step for empty fields
	if (isValidData(valuesObj)){
		// Validate Phone Number and Email
		const validPhone = isValidPhoneNumber(valuesObj["Mobile"]);
		const validEmail = isValidEmail(valuesObj["Email"]);

		if (validPhone && validEmail) {
			userRecord.push(valuesObj);
			localStorage.setItem('userRecord', JSON.stringify(userRecord));
		}
		else {
			alert("Invalid Email or Phone");
		}
	}
	else {
		alert('Please Fill Out All Field!');
	}

});

// Show Details Button Event Listener
showDetailsBtn.addEventListener('click', () => {
	displayData();
	window.scroll({
		top: 780,
		left: 0,
		behavior: "smooth",
	});
});

// Hide Details Button Event Listener
hideDetailsBtn.addEventListener('click', () => {
	data_el.classList.add('hide');
});

// Validates the user data for empty fields
function isValidData(obj) {
	for (const val of Object.values(obj)) {
		if (!val)
			return false;
	}

	return true;
}

// Validates Phone Number
function isValidPhoneNumber(num) {
	return (/^(\+\d\d)?\d{10}$/).test(num);
}

// Validates Email
function isValidEmail(email) {
	return (/^[a-zA-Z]+[a-zA-Z0-9\.\-]*@[a-zA-Z]+(\.[a-z]{2,3})$/).test(email);
}

// Displays the user data in organised form
function displayData() {

	let users = JSON.parse(localStorage.getItem('userRecord'));

	if (users === null || users.length === 0) {
		
		alert('No Users in Database!');
	} else {

		console.log("Number of users = " + users.length);

		data_el.innerHTML = '<h3 id="data-title">USER DETAILS</h3>';
		data_el.classList.remove('hide');
		users.forEach((user, idx) => {
			data_el.innerHTML += `<p class="user">USER ${idx+1}</p>`;

			for (const field in user) {
				data_el.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> <span class="entry-field">${user[field]}</span></p>`; 
			}
		});
	}
}