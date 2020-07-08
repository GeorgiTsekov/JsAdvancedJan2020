function solve() {
    let db = {};
    let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97).toUpperCase());
    alphabet.forEach(element => {
        db[element] = [];
    });

    db['N'].push('Nixon');
    db['P'].push('Peterson');

    let addButton = document.querySelector("#exercise > article > button").addEventListener('click', addToDb);
    let listItems = document.querySelectorAll("ol li");
    
    function addToDb() {
        let input = document.querySelector("#exercise > article > input[type=text]").value;
        let firstLetter = input[0].toUpperCase();
        let name = firstLetter + input.toLowerCase().slice(1);
        if (db[firstLetter]) {
            db[firstLetter].push(name)

            listItems[Number(firstLetter.charCodeAt(0)) - 65].textContent = db[firstLetter].join(', ')
            console.log(db[firstLetter]);
        }
    }
}