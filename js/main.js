let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

const errorText = "ERROR";

init();

function init(){
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const acButton = document.querySelector("#ac");
    const periodButton = document.querySelector(".period");

    numberButtons.forEach((button) => {
        button.addEventListener("mouseenter", (e) => highlightOnEnter(e, "blue"));
        button.addEventListener("mouseleave", (e) => highlightOnExit(e));
    });

    operatorButtons.forEach((button) => {
        button.addEventListener("mouseenter", (e) => highlightOnEnter(e, "aqua"));
        button.addEventListener("mouseleave", (e) => highlightOnExit(e));
    });

    acButton.addEventListener("mouseenter", (e) => highlightOnEnter(e, "red"));
    acButton.addEventListener("mouseleave", (e) => highlightOnExit(e));

    periodButton.addEventListener("mouseenter", (e) => highlightOnEnter(e, "blue"));
    periodButton.addEventListener("mouseleave", (e) => highlightOnExit(e));
}

function highlightOnEnter(e, color){
    e.target.style.backgroundColor = color;
    e.target.style.color = "white";
}

function highlightOnExit(e){
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
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
