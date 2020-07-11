let bodyChangeTheme = document.querySelector('body');
let buttonChangeTheme = document.querySelector('.buttonChangeTheme');
let spanChangeTheme = document.querySelector('.spanChangeTheme');
let iChangeTheme =document.querySelector('.iChangeTheme');



buttonChangeTheme.onclick = function () {
	bodyChangeTheme.classList.toggle('dark');
	bodyChangeTheme.classList.toggle('light');
	buttonChangeTheme.classList.toggle('primaryS_dark');
	if (bodyChangeTheme.classList.contains('dark')) {
	spanChangeTheme.textContent = "Светлая тема";
		} else {
		spanChangeTheme.textContent = "Темная тема";
		};
}
