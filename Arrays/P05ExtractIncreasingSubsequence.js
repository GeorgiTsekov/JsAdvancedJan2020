function extract(array = []){
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     const nextElement = array[i + 1];
        
    //     if (element > nextElement) {
    //         array.splice(i + 1, 1);
    //         i--;
    //     }
    // }

    let result = array.reduce((acc, currElement) => {
        const lastElement = acc[acc.length - 1];

        if (currElement >= lastElement || lastElement === undefined) {
            acc.push(currElement);
        }

        return acc;

    }, []);

    console.log(result.join('\n'));
}

extract([20, 
    3, 
    2, 
    15,
    6, 
    1]);
