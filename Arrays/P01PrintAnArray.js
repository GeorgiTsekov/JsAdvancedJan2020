// function printAnArray(array){
//     let symbol = array.pop();

//     console.log(array.join(symbol));
// }

// printAnArray(['How about no?', 
// 'I',
// 'will', 
// 'not', 
// 'do', 
// 'it!', 
// '_']);

function printNthElement(array) {
    let step = array.pop();

    for (let i = 0; i < array.length; i += +step) {
        console.log(array[i]);
    }
}

printNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);