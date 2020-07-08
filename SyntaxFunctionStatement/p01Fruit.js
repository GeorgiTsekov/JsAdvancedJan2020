function solve(fruit, weight, price) {
    let weithInKg = weight / 1000;
    let sum = weithInKg * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weithInKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);