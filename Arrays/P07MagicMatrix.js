function magicMatrix(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    let isTrue = true;

    for (let i = 0; i < matrix.length; i++) {
        let horisontalSum = matrix[0].reduce((a, b) => a + b, 0);
        let verticalSum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix.length <= j && horisontalSum !== 0) {
                isTrue = false;
                break;
            } else if (matrix.length <= j && horisontalSum === 0) {
                break;
            }
            let element = matrix[j][i];
            verticalSum += element;
        }
            if (sum !== horisontalSum || sum !== verticalSum || isTrue === false) {
                isTrue = false;
                break;
            }
    }

    console.log(isTrue);
}

magicMatrix([[5, 0, 0],
    [0, 5, 0]]);