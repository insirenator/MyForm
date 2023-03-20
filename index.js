let userCount = 0;
const form = document.querySelector('#data-form');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e) => {
	// prevent form submission
	e.preventDefault();

	// show the form values
	const formData = new FormData(form);
	const values = [...formData.entries()];
	console.log(values);

	localStorage.setItem(userCount, JSON.stringify(values));

	// Increment the user count
	userCount++;


	displayData();	
});

function displayData() {
	const data_el = document.querySelector('.data');
	data_el.innerHTML = '<h3 id="data-title">Details</h3>';
	data_el.classList.remove('hide');

	for (let i = 0; i < userCount; i++) {
		let values = JSON.parse(localStorage.getItem(i));

		data_el.innerHTML += `<p class="user">USER ${i+1}</p>`;

		for (const value of values) {
		data_el.innerHTML += `<p class="entry"><span class="entry-title">${value[0]} :</span> ${value[1]}</p>`; 
		}
	}
}