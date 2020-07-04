let changeForm = document.querySelector('.changeForm');
let changeTextarea = document.querySelector('.changeTextarea');
let buttonChange = document.querySelector('.buttonChange');
let changeText = document.querySelector('.changeText');

changeForm.onsubmit = function (evt) {
	evt.preventDefault ();
	changeText.textContent = changeTextarea.value;
};