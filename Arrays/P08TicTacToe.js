function ticTacToe(arr = []) {
    let matrix = [];
    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = 'false';
        }
    }

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        const row = element[0];
        const col = element[2];

        let player = '';

        if (counter % 2 === 0) {
            player = 'X';
        } else {
            player = 'O';
        }

        if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length) {
            if (matrix[row][col] === 'false') {
                matrix[row][col] = player;
            } else {
                console.log("This place is already taken. Please choose another!");
                counter--;
            }
        }

        if ((matrix[0][0] === player && matrix[1][0] === player && matrix[2][0] === player) ||
            (matrix[0][0] === player && matrix[0][1] === player && matrix[0][2] === player) ||
            (matrix[0][0] === player && matrix[1][0] === player && matrix[2][0] === player) ||
            (matrix[1][0] === player && matrix[1][1] === player && matrix[1][2] === player) ||
            (matrix[2][0] === player && matrix[2][1] === player && matrix[2][2] === player) ||
            (matrix[0][1] === player && matrix[1][1] === player && matrix[2][1] === player) ||
            (matrix[0][2] === player && matrix[1][2] === player && matrix[2][2] === player) ||
            (matrix[0][0] === player && matrix[1][1] === player && matrix[2][2] === player) ||
            (matrix[0][2] === player && matrix[1][1] === player && matrix[2][0] === player)) {
            console.log(`Player ${player} wins!`);
            break;
        }

        if ((!matrix[0].includes('false')) &&
            (!matrix[1].includes('false')) &&
            (!matrix[2].includes('false'))) {
            console.log("The game ended! Nobody wins :(");
            break;
        }

        counter++;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);