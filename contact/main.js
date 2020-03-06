var inputName = document.getElementById('input-name');
var inputMail = document.getElementById('imput-mail');
var inputMessage = document.getElementById('input-message');
var button = document.querySelector('.submit-button');
var regEx =/\S+@\S+\.\S+/;
var form = document.querySelector('.form')

function checkInput() {
    if (inputName.value.trim() !=="" && regEx.text(inputMessage.value.trim() ! =="") {
        button.style.backgroundColor = '#fa923f';
        button.disabled = false;
    } else {
        button.style.backgroundColor = '#979695';
        button.disabled = true;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Submitted');
})