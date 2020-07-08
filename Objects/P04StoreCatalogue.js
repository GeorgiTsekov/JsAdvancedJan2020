// function storeCatalogue(arrayOfProducts = []) {
//     const catalogueData = {};

//     arrayOfProducts.sort();

//     arrayOfProducts.forEach(element => {
//         let items = element.split(' : ')
//         let name = items[0];
//         let number = items[1];
//         let newItem = name + ': ' + number;
//         let firstLetter = newItem.slice(0, 1);

//         if (!catalogueData[firstLetter]) {
//             catalogueData[firstLetter] = [];
//         }

//         catalogueData[firstLetter].push(newItem);
//     });

//     for (const key in catalogueData) {
//         console.log(key);
//         catalogueData[key].forEach(element => {
//             console.log(`  ${element}`)
//         });
//     }
// }

function storeCatalogue(arrayOfProducts){
    let parsedData = arrayOfProducts.reduce((acc, productLine) => {
        let [name, price] = productLine.split(':').map(x => x.trim());

        if (!acc[name[0]]) {
            acc[name[0]] = [];
        }

        acc[name[0]].push(productLine.split(':').map(x => x.trim()).join(': '));

        return acc;
    }, {})

    Object.keys(parsedData).sort().map(x => {
        console.log(x)

        parsedData[x].sort().map(product => {
            console.log(`  ${product}`)
        })
    })
}

storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);