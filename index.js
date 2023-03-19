const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('#data-form');

submitBtn.addEventListener('click', (e) => {
	// prevent form submission
	e.preventDefault();

	// show the form values
	const formData = new FormData(form);
	const values = [...formData.entries()];
	console.log(values);

	displayData(values);	
});

function displayData(values) {
	const data_el = document.querySelector('#data');
	data_el.innerHTML= '';

	for (const value of values) {
		data_el.innerHTML += `<p>${value[0]} : ${value[1]}</p>`; 
	}
}