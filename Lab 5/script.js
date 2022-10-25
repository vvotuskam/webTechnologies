let num1 = null;
let num2 = null;

let buttons = Array.from(document.getElementsByName('btn'));
let display = document.getElementById('display');

let operationDone = false;
let operator;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case "symbol":
                if (display.innerText === '0') {
                    display.innerText = e.target.innerText;
                }
                else if (display.innerText === '0' && e.target.innerText !== '0') {
                    display.innerText = e.target.innerText;
                } 
                else if (operationDone) {
                    display.innerText = e.target.innerText;
                    operationDone = false;
                    num1 = null;
                }
                else if (display.innerText !== '0') {
                    display.innerText += e.target.innerText;
                }
            break;
            case "operator": 
                if (e.target.innerText === '-' && display.innerText === '' || display.innerText === '0') {
                    display.innerText = '-';
                    break;
                }
                if (num1 === null) {
                    num1 = Number(display.innerText);
                    operator = e.target.innerText;
                    display.innerText = "";
                }
                else if (operationDone) {
                    operator = e.target.innerText;
                    display.innerText = "";
                    operationDone = false;
                }
                else if (num1 !== null) {
                    num2 = Number(display.innerText);
                    switch (e.target.innerText) {
                        case "+": num1 += num2; break;
                        case "-": num1 -= num2; break;
                        case "x": num1 *= num2; break;
                        case "/": num1 /= num2; break;
                    }
                    display.innerText = num1;
                }
            break;
            case "equal":
                num2 = Number(display.innerText);
                switch (operator) {
                    case "+": num1 += num2; break;
                    case "-": num1 -= num2; break;
                    case "x": num1 *= num2; break;
                    case "/": num1 /= num2; break;
                }
                display.innerText = num1;
                num2 = null;
                operationDone = true;
            break;
            case "clear":
                num1 = null;
                num2 = null;
                operationDone = false;
                operator = null;
                display.innerText = '';
            break;
            case "delete":
                if (operationDone) {
                    num1 = null;
                    num2 = null;
                    operationDone = false;
                    operator = null;
                    display.innerText = '';
                }
                else if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                 }
            break;
        }
    });
});
