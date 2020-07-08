function validityChecker(numbers) {
    let x1 = +numbers[0];
    let y1 = +numbers[1];
    let x2 = +numbers[2];
    let y2 = +numbers[3];

    let x1y1To00 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let x2y2To00 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let x1y1Tox2y2 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (x1y1To00 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (x2y2To00 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (x1y1Tox2y2 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker([2, 1, 1, 1]);