let buttonLike = document.querySelector('.buttonLike');
let numberLike = document.querySelector('.numberLike');
let iconLike = document.querySelector('.iconLike');
let counter = 0;

buttonLike.onclick =  function() {
	if (iconLike.classList.contains('liked')){
		numberLike.textContent = "Нравится";
		counter--;
	} else {
		counter++;
		numberLike.textContent = counter;
	}
	iconLike.classList.toggle('liked');
	numberLike.classList.toggle('liked');
};