let chatMessage = document.querySelector('.chatMessage');
let chatButton = document.querySelector('.chatButton');
let chatInput = document.querySelector('.chatInput');
let chatForm = document.querySelector('.chatForm');
let chatBody = document.querySelector('.chatBody');

chatBody.scrollTop = chatBody.scrollHeight;

chatForm.onsubmit = function (evt) {
	evt.preventDefault ();
	let newDivMessage = document.createElement('div');
	let newP = document.createElement('p');
	let sender = document.createElement('p');
	chatBody.append(newDivMessage);
	newDivMessage.append(sender);
	newDivMessage.append(newP);
	sender.classList.add('caption');
	newDivMessage.classList.add('chatMessage');
	sender.textContent = "Мистер";
	newP.textContent = chatInput.value;
	chatBody.scrollTop = chatBody.scrollHeight;
	chatInput.value = '';
};



