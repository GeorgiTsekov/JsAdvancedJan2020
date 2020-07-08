function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    const timeData = {
        'days': (days) => {
            const hours = (days) * 24;
            const minutes = (hours) * 60;
            const seconds = (minutes) * 60;

            return [ days, hours, minutes, seconds];
        },
        'hours': (hours) => {
            const days = hours / 24;
            const minutes = (hours) * 60;
            const seconds = (minutes) * 60;

            return [ days, hours, minutes, seconds];
        },
        'minutes': (minutes) => {
            const seconds = (minutes) * 60;
            const hours = (minutes) / 60;
            const days = hours / 24;

            return [ days, hours, minutes, seconds];
        },
        'seconds': (seconds) => {
            const minutes = seconds / 60
            const hours = (minutes) / 60;
            const days = hours / 24;

            return [ days, hours, minutes, seconds];
        }
    }

    let handler = (e) => {
        const arg = e.target.id.split('Btn')[0];
        const number = Number(document.getElementById(arg).value);
        
        let [ days, hours, minutes, seconds ] = timeData[arg](number)

        document.getElementById("days").value = days
        document.getElementById("hours").value = hours
        document.getElementById("minutes").value = minutes
        document.getElementById("seconds").value = seconds
    }

    daysBtn.addEventListener('click', handler)
    hoursBtn.addEventListener('click', handler)
    minutesBtn.addEventListener('click', handler)
    secondsBtn.addEventListener('click', handler)
}