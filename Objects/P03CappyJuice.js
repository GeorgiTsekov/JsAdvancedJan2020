// function cappyJuice(arrayOfJuice = []) {
//     let juiceData = {};

//     let bottles = {};

//     arrayOfJuice.forEach(element => {
//         let juice = element.split(' => ');

//         let juiceName = juice[0];
//         let juiceQuantity = Number(juice[1]);

//         if (!juiceData[juiceName]) {
//             juiceData[juiceName] = 0;
//         }

//         juiceData[juiceName] += juiceQuantity;

//         if (juiceData[juiceName] >= 1000) {

//             let bottleCount = Math.floor(juiceData[juiceName] / 1000); 

//             juiceData[juiceName] -= bottleCount * 1000;

//             if (!bottles[juiceName]) {
//                 bottles[juiceName] = 0;
//             }

//             bottles[juiceName] += bottleCount;
//         }
//     });

//     for (const key in bottles) {
//         console.log(`${key} => ${bottles[key]}`) 
//     }
// }

function cappyJuice(arrayOfJuice = []) {

    let parsedDataJuice = arrayOfJuice.reduce((juiceAcc, juiceKVP) => {
        let [juiceName, quantity] = juiceKVP.split(' => ');

        if (juiceAcc.curretJuiceQuantity[juiceName]) {
            juiceAcc.curretJuiceQuantity[juiceName] += Number(quantity);
        } else {
            juiceAcc.curretJuiceQuantity[juiceName] = Number(quantity);
        }

        let bottleQ = Math.floor(juiceAcc.curretJuiceQuantity[juiceName] / 1000);

        if (bottleQ > 0) {
            juiceAcc.compleatedJuices[juiceName] = bottleQ;
        }

        return juiceAcc;

    }, { compleatedJuices: {}, curretJuiceQuantity: {} }).compleatedJuices;

    for (const key in parsedDataJuice) {
        console.log(`${key} => ${parsedDataJuice[key]}`)
    }
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);