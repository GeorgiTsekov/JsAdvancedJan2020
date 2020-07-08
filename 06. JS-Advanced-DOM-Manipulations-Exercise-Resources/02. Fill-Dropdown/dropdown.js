function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let selectMenu = document.getElementById('menu');

    let optionElement = document.createElement('option');

    optionElement.textContent = textInput.value;
    optionElement.value = valueInput.value;

    selectMenu.appendChild(optionElement);

    textInput.value = '';
    valueInput.value = '';
}