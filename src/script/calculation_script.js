// append value
function appendValue(value) {
    
    let inputArea = document.querySelector('.input-area');
    let displayArea = document.querySelector('.display-area');

    if (inputArea.value === '0') {
        inputArea.value = value;
    }
    else {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            displayArea.value = inputArea.value + '' + value;
            return;
        }
        inputArea.value += value;         
    }
}

function clearAll() {
    let inputArea = document.querySelector('.input-area');
    let displayArea = document.querySelector('.display-area');
    inputArea.value = '0';
    displayArea.value = '';
}

function clearInput() {
    let inputArea = document.querySelector('.input-area');
    inputArea.value = '0';
}

function clearLast() {
    let inputArea = document.querySelector('.input-area');
    if (inputArea.value.length > 1) {
        inputArea.value = inputArea.value.slice(0, -1);
    } else {
        inputArea.value = '0';
    }
}