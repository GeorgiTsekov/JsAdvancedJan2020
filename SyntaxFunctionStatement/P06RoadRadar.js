function roadRadar(arrayOfElements) {
    let currentSpeed = +arrayOfElements[0];
    let maxSpeed = 0;
    let road = arrayOfElements[1];

    switch (road) {
        case 'motorway':
            maxSpeed = 130;
            break;
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'city':
            maxSpeed = 50;
            break;
        case 'residential':
            maxSpeed = 20;
            break;
        default:
            break;
    }

    let speedDifference = currentSpeed - maxSpeed;

    if (speedDifference <= 0) {
        return '';
    }
    else if (speedDifference <= 20) {
        return 'speeding';
    }
    else if (speedDifference <= 40) {
        return 'excessive speeding';
    }
    else {
        return 'reckless driving';
    }
}

console.log(roadRadar([200, 'motorway']));