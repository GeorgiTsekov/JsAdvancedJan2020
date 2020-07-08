function sameNumbers(num) {
    let allTrue = num.toString()
    .split('')
    .filter(x => num.toString()[0] === x)
    .length === num.toString().length;

    let sum = num.toString().split('').reduce((acc, x) => +acc + +x);

    console.log(allTrue); 
    console.log(sum); 
}

console.log(sameNumbers(2222222));