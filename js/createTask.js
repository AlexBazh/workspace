let createTaskForm = document.querySelector('.createTaskForm');
let createTaskTextarea = document.querySelector('.createTaskTextarea');
let priorityTaskButton = document.querySelector('.priorityTaskButton');
let createTaskButton = document.querySelector('.createTaskButton');
let listTask = document.querySelector('.listTask');


let charCounter = document.querySelector('.charCounter');
let textCounter = document.querySelector('.textCounter');

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
	if (priorityTaskButton.classList.contains('important_btn')) {
		newTask.classList.add('important_task');
	};
	createTaskTextarea.value = '';
	charCounter.textContent = 0;
};

createTaskTextarea.oninput = function () {
 	charCounter.textContent = createTaskTextarea.value.length;

 	if (createTaskTextarea.value.length>40) {
 		createTaskButton.disabled = true;
		textCounter.classList.add('textCounterWarning');
 	} else { 
 		createTaskButton.disabled = false;
		textCounter.classList.remove('textCounterWarning');
 	};

};

