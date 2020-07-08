function solution() {
    const products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function action(str) {
        let commands = str.split(' ');
        let command = commands[0];

        if (command === 'report') {
            const reportArray = [];

            for (const key in products) {
                reportArray.push(`${key}=${products[key]}`);
            }

            return reportArray.join(' ');
        } else if (command === 'restock') {
            let product = commands[1];
            let quantityOfProducts = +commands[2];
            products[product] += quantityOfProducts;
            return 'Success';

        } else if (command === 'prepare') {
            let meal = commands[1];
            let quantityOfMeals = +commands[2];
            let isNotError = true;
            for (const key in meals[meal]) {
                if (products[key] < meals[meal][key] * quantityOfMeals) {
                    isNotError = false;
                    return `Error: not enough ${key} in stock`;
                }
            }

            if (isNotError) {
                for (const key in meals[meal]) {
                    products[key] -= meals[meal][key] * quantityOfMeals;
                }

                return 'Success';
            }
        }
    }
}

let rob = solution();
console.log(rob('restock carbohydrate 10'));
console.log(rob('restock flavour 10'));
console.log(rob('prepare apple 1'));
console.log(rob('restock fat 10'));
console.log(rob('prepare burger 1'));
console.log(rob('report'));
console.log(rob('prepare turkey 1'));
console.log(rob('report'));