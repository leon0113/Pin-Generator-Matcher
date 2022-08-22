// ! Pin generator section
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('Got 3 digit so calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//! User Pin section
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-num');
    if (isNaN(number)) {
        // console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-num').value;

    const pinPass = document.getElementById('pin-pass');
    const pinFail = document.getElementById('pin-fail');
    if (pin == typed) {

        pinPass.style.display = 'block';
        pinFail.style.display = 'none';
    }
    else {

        pinFail.style.display = 'block';
        pinPass.style.display = 'none';
    }
}