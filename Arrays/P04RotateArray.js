function rotateArray(array = []) {
    let countOfRotations = +array.pop();
    
    if (countOfRotations > array.length) {
        countOfRotations = countOfRotations % array.length;
    }

    for (let i = 0; i < countOfRotations; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);