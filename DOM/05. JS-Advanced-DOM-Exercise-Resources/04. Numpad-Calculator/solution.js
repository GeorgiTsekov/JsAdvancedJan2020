function solve() {
    let pad = document.getElementsByClassName('keys')[0];
    let output = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');
    let clearButton = document.getElementsByClassName('clear')[0];
    let operations = {
        '+': (num1, num2) => Number(num1) + Number(num2),
        '-': (num1, num2) => Number(num1) - Number(num2),
        '/': (num1, num2) => Number(num1) / Number(num2),
        '*': (num1, num2) => Number(num1) * Number(num2)
    }

    let operators = ['+', '-', '/', '*'];

    clearButton.addEventListener('click', () => {
        output.innerHTML = "";
        result.innerHTML = "";
    })

    pad.addEventListener('click', ({ target: { value } }) => {
        if (!value) {
            return
        }

        if (value === '=') {
            let params = output.innerHTML.split(' ');

            let firstNumber = params[0];
            let operator = params[1];
            let secondNumber = params[2];

            if (secondNumber === '') {
                result.innerHTML = 'NaN'
                return
            }

            result.innerHTML = operations[operator](firstNumber, secondNumber);

            return
        }

        if (operators.includes(value)) {
            output.innerHTML += ` ${value} `;

            return
        }

        output.innerHTML += value;
    })
}