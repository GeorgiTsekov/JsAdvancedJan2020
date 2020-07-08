function solve() {
    let optionList = document.querySelectorAll('#selectMenuTo')[0];
    let button = document.querySelector('button');
    let input = document.querySelector('#input')

    optionList.innerHTML =
    `
    <option selected value=""></option>
    <option  value="binary">Binary</option>
    <option  value="hexadecimal">Hexadecimal</option>
    `
    button.addEventListener('click' , () => {
        console.log(input.value)

        console.log(optionList.value, ' <= select')

        let result
        if (optionList.value === "binary") {
            result = (Number(input.value)).toString(2);
        } else if (optionList.value === "hexadecimal") {
            result = (Number(input.value)).toString(16).toUpperCase();
        }
        document.getElementById('result').value = result;
    })
}