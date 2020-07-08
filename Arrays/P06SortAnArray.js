function sortAnArray(array = []){
    function comparatorByLengthThenAlfabeth(firstName, secondName) {
        return firstName.length - secondName.length;
    };
    let sortedArray = array
    .sort((firstName, secondName) => firstName.length - secondName.length ||
                                     firstName.localeCompare(secondName));

    console.log(sortedArray.join('\n'));
}

sortAnArray(['test', 
'Deny', 
'omen', 
'Default']);