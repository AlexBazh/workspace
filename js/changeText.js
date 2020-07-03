let changeText = document.querySelector('.changeText');
let changeForm = document.querySelector('.changeForm');
let buttonChange = document.querySelector('.buttonChange');

buttonChange.onclick = function (evt) {
	console.log('1');
	evt.preventDefault ();
	changeText.textContent = changeForm.value;
};