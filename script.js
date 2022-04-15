const displayDiv = document.querySelector(".display");
const showOnDisplayBtns = document.querySelectorAll('.show-on-display');
const clearDisplay = document.querySelector('.clear-all');
const clearLastLetter = document.querySelector('.remove-last')
const resultBtn = document.querySelector('.equal-btn');

let displayText = '';
let savedText = '';
const operators = ["+", "-", "*", "÷"]
let numbers = [];
let user_operators = [];
let firstValue = true;

function updateDisplay(displayText) {
    displayDiv.textContent = savedText + `${displayText}`;
}

function operate(n1, op, n2) {
    switch (op) {
        case '+':
            numbers = [];
            numbers.push(n1 + n2);
            updateDisplay(numbers[0]);
            break;
    
        default:
            break;
    }
}

resultBtn.addEventListener('click', () => {
    operate();
})

clearDisplay.addEventListener('click', () => {
    displayText = '';
    updateDisplay(displayText);
})

clearLastLetter.addEventListener('click', () => {
    displayText = displayText.slice(0, - 1);
    updateDisplay(displayText);
})

showOnDisplayBtns.forEach((showOnDisplayBtn) => {
    showOnDisplayBtn.addEventListener('click', () => {
        if (!firstValue && operators.includes(showOnDisplayBtn.value)) {
            user_operators.push(showOnDisplayBtn.value);
            firstValue = false;
            numbers.push(displayText);
            displayText = '';
            operate(numbers[0], operators[0], numbers[1]);
        } else if (operators.includes(showOnDisplayBtn.value)) {
            user_operators.push(showOnDisplayBtn.value);
            firstValue = false;
            numbers.push(displayText);
            displayText = '';
            updateDisplay(numbers[0])
        } else if (!operators.includes(showOnDisplayBtn.value)) {
            displayText = displayText + showOnDisplayBtn.value;
            
        }


        updateDisplay(displayText);

    })
})


// //         if (operators.includes(showOnDisplayBtn.value) && operators.includes(displayText.slice(-1))) {
//     alert("Can't group operators!");
// } else {
//     if (i > 0 && operators.includes(displayText.slice(-1))) {
//         savedText = displayText.slice(0, -1);
//     }
//     displayText = displayText + showOnDisplayBtn.value;
//     i++;
// }
// updateDisplay(displayText);