function argumentInfo(...args){
    const arrayOfTypes = {};

    args.map(arg => {
        let type = typeof(arg);
        console.log(`${type}: ${arg}`);

        if (!arrayOfTypes.hasOwnProperty(type)) {
            arrayOfTypes[type] = 0;
        }

        arrayOfTypes[type]++;
    })
    
    Object.entries(arrayOfTypes).sort((a, b) => {
        const [aKey, aValue ] = a;
        const [bKey, bValue ] = b;

        return bValue - aValue;
    })
    .map(x => {
        console.log(`${x[0]} = ${x[1]}`);
    })
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 'asd');