// let key = 'specialKey';
// let text = [`In this text the specialKey HELLOWORLD! is correct, but
//     the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while
//     SpeCIaLkeY SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`];

function solve() {
    let [key, ...text] = JSON.parse(document.getElementById('array').value);
    let resultRef = document.getElementById('result');
    let ourRegex = new RegExp(`${key}[ ]+([A-Z!%#\$]{8,})([\., ]|$)`, `gmi`);

    text.forEach(dataLine => {
        console.log(dataLine)
        let replacedLine = dataLine;

        if (dataLine.match(ourRegex)) {
            let matches = dataLine.match(ourRegex)
                .map(x => x.split(' ')[1])
                .filter(str => str === str.toUpperCase())
                .map(x => {
                    let parsedWord = x
                        .replace(/!/g, 1)
                        .replace(/%/g, 2)
                        .replace(/#/g, 3)
                        .replace(/\$/g, 4)
                        .toLowerCase()

                    let targedword = x;

                    replacedLine = replacedLine.replace(targedword, parsedWord);
                })
        }

        let tempP = document.createElement('p');
        tempP.innerText = replacedLine;
        resultRef.appendChild(tempP);
    });
}

// solve()
