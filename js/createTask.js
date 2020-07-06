let createTaskForm = document.querySelector('.createTaskForm');
let createTaskTextarea = document.querySelector('.createTaskTextarea');
let priorityTaskButton = document.querySelector('.priorityTaskButton');
let createTaskButton = document.querySelector('.createTaskButton');
let listTask = document.querySelector('.listTask');
// переменные для лимита символов
let charCounter = document.querySelector('.charCounter');
let textCounter = document.querySelector('.textCounter');
// переменные для фильтра
let filter = document.querySelector('.filter');
let tasks = document.getElementById('testTask');
let childTasks = tasks.children;

// кнопка приоритета
priorityTaskButton.onclick = function () {
	priorityTaskButton.classList.toggle('important_btn');
	if (priorityTaskButton.classList.contains('important_btn')) {
		priorityTaskButton.textContent = 'Важная задача';
	} else {
		priorityTaskButton.textContent = 'Обычная задача';
	};
};

//отправка формы (создание новой задачи)
createTaskForm.onsubmit = function (evt) {
	evt.preventDefault();
	let newTask = document.createElement('li');
	listTask.append(newTask);
	newTask.classList.add('tasks'); //добавляем класс tasks ко всем новым задачам
	newTask.textContent = createTaskTextarea.value;
	if (priorityTaskButton.classList.contains('important_btn')) {
		newTask.classList.add('important_task');
		newTask.dataset.category = 'importants';
	} else {
		newTask.dataset.category = 'regulars';
	};
	createTaskTextarea.value = '';
	charCounter.textContent = 0; // обнуляем значение введенных символов после отправки формы 
	textCounter.classList.remove('textCounterWarning');
};

//лимит символов для создания текста задачи 
createTaskTextarea.oninput = function () {
 	charCounter.textContent = createTaskTextarea.value.length;

 	if (createTaskTextarea.value.length>=40) {
		textCounter.classList.add('textCounterWarning');
 	} else { 
		textCounter.classList.remove('textCounterWarning');
 	};
};

//фильтр

filter.onchange = function () {
for (let childTask of childTasks) {
	if (childTask.dataset.category !== filter.value && filter.value !== 'all') {
		childTask.classList.add('hidden');
	} else {
		childTask.classList.remove('hidden');
	};
};	
};












