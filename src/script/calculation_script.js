let b_val = "";// value before operater
let c_op = "";// current operater
let a_val = "";// value before operater
let l_c = "";// last clicked type
let re = "";// result

function clear_all() {
    let input = document.querySelector('.input-area'); // bottom display
    let display = document.querySelector('.display-area');// top display
    input.value = '0';
    display.value = '';
    b_val = "";
    c_op = "";
    a_val = "";
    l_c = "";
    re = "";
}

function clear_input() {
    let input = document.querySelector('.input-area');
    input.value = '0';
}

function back_space() {
    let input = document.querySelector('.input-area');
    if (input.value.length > 1) {
        input.value = input.value.slice(0, -1);
    } else {
        input.value = '0';
    }
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero");
        return Infinity;
    }
    return a / b;
}

function percentage(){
    let input = document.querySelector('.input-area');
    let display = document.querySelector('.display-area');
    let val = parseFloat(input.value);
    if (isNaN(val) || val === 0) {
        display.value = '0%';
        input.value = 0;
    } else {    
        display.value = val + '%';
        input.value = val / 100;
    }
    l_c = "special" 
}

function one_dvide_x(){
    let input = document.querySelector('.input-area');
    let display = document.querySelector('.display-area');
    let x = parseFloat(input.value);
    if (isNaN(x) || x === 0) {
        alert("Error: Division by zero");
        display.value = '1/(0)';
        input.value = Infinity;
    } else {    
        display.value = 1 + '/(' + x + ')';
        input.value = Number((1 / x).toFixed(2)).toString();
    
    }
    l_c = "special" 
}

function square(){
    let input = document.querySelector('.input-area');
    let display = document.querySelector('.display-area');
    let val = parseFloat(input.value);
    if (isNaN(val)) {
        alert("Error: No input value");
        input.value = NaN;
    } else {    
        display.value = 'sqr(' + input.value + ')';
        input.value = Number((val * val).toFixed(2)).toString();
    }
    l_c = "special" 
}

function square_root(){
    let input = document.querySelector('.input-area');
    let display = document.querySelector('.display-area');
    let val = parseFloat(input.value);
    if (isNaN(val) || val < 0) {
        alert("Error: Invalid input for square root");
        input.value = NaN;
    } else {
        display.value = '√(' + input.value + ')';
        input.value = Number((Math.sqrt(val)).toFixed(2)).toString();
    }
    l_c = "special"
}


function toggle_sign(){
    let input = document.querySelector('.input-area');
    let val = parseFloat(input.value);
    if (isNaN(val) || val === 0) {
        input.value = 0;
    } else {
        input.value = (-val).toString();
    }
}

function calculate_result() {
    let input = document.querySelector('.input-area');
    let display = document.querySelector('.display-area');
    a_val = input.value;

    let a = parseFloat(b_val);
    let b = parseFloat(a_val);
    switch (c_op) {
        case '+': re = add(a, b); break;
        case '-': re = subtract(a, b); break;
        case '*': re = multiply(a, b); break;
        case '/': re = divide(a, b); break;
        default: re = b;
    }

    re = Number(re.toFixed(2)).toString();

    display.value = b_val + c_op + a_val + '=';
    input.value = result;
    b_val = re;
    c_op = "";
    l_c = "=";
}

function append_val(val) {
    let input = document.querySelector('.input-area');
    let display = document.querySelector('.display-area');
    const op = ['+', '-', '*', '/'].includes(val); // operater value
    const eq = val === '='; // equal operater

    // eq then eq
    if ((l_c === "=" || l_c === "special" ) && eq ) {
        return;
    }

    // if l_c = "special" input = new input 
    if (l_c === "special" && !op && !eq) {
        if (val === '.') {
            input.value = '0.';
        } else {
            input.value = val.toString();
        }
        c_op = "";
        b_val = "";
        a_val = "";
        l_c = "num";
        return;
    }

    // num then op
    if (c_op && !op && !eq && l_c === "op") {
        if (val === '.'){
            input.value = '0.'
        }else{
            input.value = val.toString();
        }
        a_val = input.value;
        display.value = b_val + c_op;
        l_c = "num";
        return;
    }

    // op then op
    if (c_op && op && !eq && l_c === "op") {
        c_op = val;
        display.value = b_val + c_op;
        l_c = "op";
        return;
    }

    // op, num then num
    if (c_op && !op && !eq && l_c === "num") {
        if (val === '.' && input.value.includes('.')){
            return;
        }else{
            input.value += val.toString();
        }
        a_val = input.value;
        l_c = "num";
        return;
    }

    // op, num , op or eq 
    if (c_op && l_c === "num" && (op || eq)) {
        a_val = input.value;
        let a = parseFloat(b_val);
        let b = parseFloat(a_val);
        switch (c_op) {
            case '+': re = add(a, b); break;
            case '-': re = subtract(a, b); break;
            case '*': re = multiply(a, b); break;
            case '/': re = divide(a, b); break;
            default: re = b;
        }
        re = Number(re.toFixed(2)).toString();
        if (eq) {
            display.value = b_val + c_op + a_val + '=';
            input.value = re;
            b_val = re;
            c_op = "";
            l_c = "=";
        } else {
            display.value = re + val;
            input.value = re;
            b_val = re;
            c_op = val;
            l_c = "op";
        }
        return;
    }

    // normal input
    if (!op && !eq) {
        if (input.value === '0' || l_c === "op" || l_c === "=") {
            if (val === '.'){
                input.value = '0.';
            } else {
                input.value = val.toString();
            }
        }else{
            if (val === '.' && input.value.includes('.')){
                return;
            }
            input.value += val.toString();
        }    
        if (!c_op) b_val = input.value;
        l_c = "num";
    } else if (op) {
        c_op = val;
        b_val = input.value;
        display.value = b_val + c_op;
        l_c = "op";
    } else if (eq) {
        calculate_result();
    }
}