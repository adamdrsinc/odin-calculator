let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

const errorText = "ERROR";

init();

function init(){

}

function operate(a, b, operator){
    switch(operator){
        case "+": {
            //TODO: Implement
            return add(a, b);
            break;
        }
        case "-": {
            //TODO: Implement
            return subtract(a, b);
            break;
        }
        case "/": {
            //TODO: Implement
            return divide(a, b);
            break;
        }
        case "*": {
            //TODO: Implement
            return multiply(a, b);
            break;
        }
        default:{
            return "Default Reached.";
        }
    }
}


function add(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return a + b;
}

function subtract(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return a - b;
}

function multiply(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return a * b;
}

function divide(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return a / b;
}
