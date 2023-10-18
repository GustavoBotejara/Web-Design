let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', () => myFuction(button.value));
}

function myFuction(content) {
    document.querySelector('.display').value = content;
}