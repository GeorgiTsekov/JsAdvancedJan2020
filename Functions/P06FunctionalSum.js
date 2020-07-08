let add = (function () {
    let sum = 0;

    function add(addend) {
        sum += addend;

        return add;
    };

    add.toString = function() {
        return sum;
    }

    return add;
})()
console.log(add(1)(1515)(3)(-233)(324)(0)(0));