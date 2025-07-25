let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

const errorText = "ERROR";

init();

function init(){
    addHighlightEventListeners();
    addInputEventListeners();
    document.querySelector("#equals").addEventListener('click', () => performCalculation());
    document.querySelector("#ac").addEventListener('click', () => {
        document.querySelector("#calculator-sum").textContent = "";
    })
    document.querySelector("#backspace").addEventListener('click', () => performBackspace());
}

function performBackspace(){
    const display = document.querySelector("#calculator-sum");
    
}

function addHighlightEventListeners(){
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const acButton = document.querySelector("#ac");
    const equalsButton = document.querySelector("#equals");

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

    equalsButton.addEventListener("mouseenter", (e) => highlightOnEnter(e, "red"));
    equalsButton.addEventListener("mouseleave", (e) => highlightOnExit(e));
}

function addInputEventListeners(){
    const allInputs = document.querySelectorAll(".input-button");

    allInputs.forEach((inp) => {
        inp.addEventListener('click', (element) => addInputToDisplay(element));
    });
}


function performCalculation(){
    const display = document.querySelector("#calculator-sum");

    let sumText = display.textContent;
    const parsed = Number.parseInt(sumText.slice(-1));
    const isNumber = !Number.isNaN(parsed);
    if(!isNumber){
        sumText = sumText.slice(0, -2);
    }

    const splitSumText = sumText.split(' ');
    if(splitSumText.length <= 2){
        display.textContent = splitSumText[0];
    }

    let result = performCalculationHelper(sumText);
    result = Math.round(result * 1000) / 1000;

    display.textContent = result;
}

function performCalculationHelper(sum){
    let splitSum = sum.split(' ');


    let i = 1;
    while(i < splitSum.length){
        if(splitSum[i] === '/'){
            const numBefore = splitSum[i - 1];
            const numAfter = splitSum[i + 1];
            const result = operate(numBefore, numAfter, '/');

            if(result === errorText){
                return errorText;
            }

            splitSum.splice(i-1, 3, result);

        } else if (splitSum[i] === 'x'){
            const numBefore = splitSum[i - 1];
            const numAfter = splitSum[i + 1];
            const result = operate(numBefore, numAfter, 'x');

            splitSum.splice(i-1, 3, result);
        } else {
            i += 2;
        }
    }

    if(splitSum.length === 1){
        return splitSum[0];
    }

    i = 1;
    while(i < splitSum.length){
        if(splitSum[i] === '+'){
            const numBefore = splitSum[i - 1];
            const numAfter = splitSum[i + 1];
            const result = operate(numBefore, numAfter, '+');

            splitSum.splice(i-1, 3, result);
        } else if (splitSum[i] === '-'){
            const numBefore = splitSum[i - 1];
            const numAfter = splitSum[i + 1];
            const result = operate(numBefore, numAfter, '-');


            splitSum.splice(i-1, 3, result);
        } else {
            i += 2;
        }
    }



    // for(let i = 1; i < splitSum.length; i+=2){
    //     if(splitSum[i] === '/'){
    //         const numBefore = splitSum[i - 1];
    //         const numAfter = splitSum[i + 1];
    //         const result = operate(numBefore, numAfter, '/');

    //         if(result === errorText){
    //             return errorText;
    //         }

    //         splitSum.splice(i-1, 3, result);

    //     } else if (splitSum[i] === 'x'){
    //         const numBefore = splitSum[i - 1];
    //         const numAfter = splitSum[i + 1];
    //         const result = operate(numBefore, numAfter, 'x');

    //         splitSum.splice(i-1, 3, result);
    //     }
    // }

    // for(let i = 1; i < splitSum.length; i+= 2){
    //     if(splitSum[i] === '+'){
    //         const numBefore = splitSum[i - 1];
    //         const numAfter = splitSum[i + 1];
    //         const result = operate(numBefore, numAfter, '+');

    //         splitSum.splice(i-1, 3, result);
    //     } else if (splitSum[i] === '-'){
    //         const numBefore = splitSum[i - 1];
    //         const numAfter = splitSum[i + 1];
    //         const result = operate(numBefore, numAfter, '-');


    //         splitSum.splice(i-1, 3, result);
    //     }
    // }

    return splitSum[0];
}


function addInputToDisplay(element){
    const value = element.target.value;
    const display = document.querySelector("#calculator-sum");
    const splitText = display.textContent.split(' ');

    let parsed = Number.parseInt(value);
    const isNumber = !Number.isNaN(parsed);
    
    parsed = Number.parseFloat(splitText[splitText.length - 1]);
    const lastItemInDisplayIsNumber = !Number.isNaN(parsed);

    if(value === "."){
        if(!splitText[splitText.length - 1].includes(".")){
            if(lastItemInDisplayIsNumber){
                display.textContent += ".";
                return;
            } 
        }
        return;
    }



    if(lastItemInDisplayIsNumber){
        if(isNumber){
            display.textContent += value;
        } else {
            display.textContent += " " + value;
        }
    } else {
        if(isNumber){
            display.textContent === "" ? display.textContent += value : display.textContent += " " + value;
        }
    }
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
        case "x": {
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

    return numA + numB;
}

function subtract(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return numA - numB;
}

function multiply(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return numA * numB;
}

function divide(a, b){
    const numA = Number.parseFloat(a);
    if(numA === NaN) return errorText;
    const numB = Number.parseFloat(b);
    if(numB === NaN) return errorText;

    return numB !== 0 ? numA / numB : errorText;
}
