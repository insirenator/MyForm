let userRecord = function() {
	let record = localStorage.getItem('userRecord');

	if (record === null) {
		localStorage.setItem('userRecord', "[]");
		return [];
	}

	return JSON.parse(record);
}();

const form = document.querySelector('#data-form');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e) => {
	// prevent form submission
	e.preventDefault();

	// show the form values
	const formData = new FormData(form);
	const values = [...formData.entries()];
	console.log(values);

	// Validation Step

	userRecord.push(toObject(values));
	localStorage.setItem('userRecord', JSON.stringify(userRecord));

	displayData();	
});

// Convert the nested user array to an object
function toObject(values) {
	userObj = {};

	for (val of values) {
		userObj[val[0]] = val[1];
	}

	return userObj;
}

// Display the user data
function displayData() {
	const data_el = document.querySelector('.data');
	data_el.innerHTML = '<h3 id="data-title">DETAILS</h3>';
	data_el.classList.remove('hide');

	let users = JSON.parse(localStorage.getItem('userRecord'));

	users.forEach((user, idx) => {
		data_el.innerHTML += `<p class="user">USER ${idx+1}</p>`;

		for (const field in user) {
		data_el.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${user[field].toUpperCase()}</p>`; 
		}
	});
}