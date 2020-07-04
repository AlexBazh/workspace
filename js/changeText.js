let changeText = document.querySelector('.changeText');
let changeForm = document.querySelector('.changeForm');
let buttonChange = document.querySelector('.buttonChange');

buttonChange.onclick = function (evt) {
	evt.preventDefault ();
	changeText.textContent = changeForm.value;
};