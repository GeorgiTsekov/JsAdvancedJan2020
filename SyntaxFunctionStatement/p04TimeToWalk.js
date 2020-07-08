function timeToWalk(steps, footprintInMeters, speedInKmH) {
    let distanceInMeters = steps * footprintInMeters;
    let restTime = Math.floor(distanceInMeters / 500);
    let speedInMs = speedInKmH * 5 / 18;

    let timeInSeconds = Math.ceil(distanceInMeters / speedInMs + restTime * 60);

    let dateTime = new Date(null, null, null, null, null, timeInSeconds);

    return dateTime.toTimeString().split(' ')[0];
}

console.log(timeToWalk(4000, 0.60, 5));