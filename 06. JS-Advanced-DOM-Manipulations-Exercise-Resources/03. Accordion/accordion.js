function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let paragraph = document.getElementById("extra")

    if (button.textContent === 'More') {
        button.textContent = 'Less'
        paragraph.style.display = 'block';
    } else if (button.textContent = 'Less') {
        button.textContent = 'More'
        paragraph.style.display = 'none';
    }
}