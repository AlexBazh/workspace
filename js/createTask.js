let createTaskForm = document.querySelector('.createTaskForm');
let createTaskTextarea = document.querySelector('.createTaskTextarea');
let priorityTaskButton = document.querySelector('.priorityTaskButton');
let createTaskButton = document.querySelector('.createTaskButton');
let listTask = document.querySelector('.listTask');

priorityTaskButton.onclick = function () {
	priorityTaskButton.classList.toggle('important_btn');
	if (priorityTaskButton.classList.contains('important_btn')) {
		priorityTaskButton.textContent = 'Важная задача';
	} else {
		priorityTaskButton.textContent = 'Обычная задача';
	};
};

createTaskForm.onsubmit = function (evt) {
	evt.preventDefault();
	let newTask = document.createElement('li');
	listTask.append(newTask);
	newTask.textContent = createTaskTextarea.value;
};