function lockedProfile() {
    const buttons = document.getElementsByTagName('button');

    [...buttons]
        .forEach((button) => {
            button.addEventListener('click', (e) => {
                const sibling = e.target.parentNode.children[9];
                //const selector = e.target.previousSibling.previousElementSibling.id;
                // console.log(e.target.previousSibling.previousElementSibling.id);
                const selector = sibling.id.slice(0, 5);
                const profiler = `${selector}Locked`;
                const check = document.getElementsByName(profiler)[0].checked

                if (button.textContent === 'Show more' && !check) {
                    button.textContent = 'Hide it'
                    sibling.style.display = 'block'
                } else if (button.textContent === 'Hide it' && !check) {
                    button.textContent = 'Show more'
                    sibling.style.display = 'none'
                }
            })
        });
}