function greatestCommonDivisor(a, b){
    let copyA = a;
    let copyB = b;
    
    while (copyB !== 0) {
        [copyA, copyB] = [copyB, copyA % copyB];
    }

    return copyA;
}

console.log(greatestCommonDivisor(45, 10));