function calorieObject(arrayOfProducts) {
    let result = {};

    for (let i = 0; i < arrayOfProducts.length; i+=2) {
        result[arrayOfProducts[i]] = parseInt(arrayOfProducts[i+1]);
    }

    return result;
}

console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));