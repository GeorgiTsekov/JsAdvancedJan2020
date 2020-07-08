function addRemoveElements(array) {
    let arrayOfNumbers = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];


        switch (element) {
            case 'add':
                arrayOfNumbers.push(i + 1);
                break;
            case 'remove':
                arrayOfNumbers.pop();
                break;

            default:
                break;
        }
    }
    
    console.log(arrayOfNumbers.length > 0 ? arrayOfNumbers.join('\n') : 'Empty');
}

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);