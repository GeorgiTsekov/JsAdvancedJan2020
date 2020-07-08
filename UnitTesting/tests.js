let StringBuilder = require('./js');
let assert = require('chai').assert

describe('ctor', () => {
    it('check if ctor doesnt work correctly', () => {
        let actualResult = new StringBuilder(undefined);

        let expectedResult = [];

        assert.deepEqual(actualResult._stringArray, expectedResult)
    })

    it('check if ctor works correctly', () => {
        let actualResult = new StringBuilder('Gosho')

        let expectedResult = ['G', 'o', 's', 'h', 'o']

        assert.deepEqual(actualResult._stringArray, expectedResult)
    })

    it('check if param is diff then string', () => {
        let actualResult = () => new StringBuilder(true)

        let expectedResult = 'Argument must be string';

        assert.throw(actualResult, expectedResult)
    })

    it('check if param is string', () => {
        let actualResult = new StringBuilder('Gosho')

        let expectedResult = 'Gosho';

        assert.equal(actualResult, expectedResult)
    })
})

describe('append', () => {
    

    it('check if append works correctly', () => {
        let stringBuilder = new StringBuilder("G");

        stringBuilder.append("T");

        let actualResult = stringBuilder._stringArray;

        let expectedResult = ['G','T'];

        assert.deepEqual(actualResult, expectedResult)
    })

    it('check if append works correctly', () => {
        let stringBuilder = new StringBuilder();

        stringBuilder.append("T");

        let actualResult = stringBuilder._stringArray;

        let expectedResult = ['T'];

        assert.deepEqual(actualResult, expectedResult)
    })

    it('check if append not works correctly', () => {
        let stringBuilder = new StringBuilder();

        let actualResult = () => stringBuilder.append(false);

        let expectedResult = 'Argument must be string';

        assert.throw(actualResult, expectedResult)
    })
})

describe('prepend', () => {
    

    it('check if prepend works correctly', () => {
        let stringBuilder = new StringBuilder("Gosho");

        let actualResult = stringBuilder.prepend("Tosho")

        let expectedResult = "ToshoGosho";

        assert.equal(stringBuilder.toString(), expectedResult)
    })

    it('check if prepend works correctly', () => {
        let stringBuilder = new StringBuilder();

        let actualResult = () => stringBuilder.prepend(false);

        let expectedResult = 'Argument must be string';

        assert.throw(actualResult, expectedResult)
    })
})

describe('insertAt', () => {
    

    it('check if insertAt works correctly', () => {
        let stringBuilder = new StringBuilder("Gosho");

        let actualResult = stringBuilder.insertAt("Tosho", 2)

        let expectedResult = 10;

        assert.equal(stringBuilder._stringArray.length, expectedResult)
    })

    it('check if insertAt works correctly', () => {
        let stringBuilder = new StringBuilder();

        let actualResult = stringBuilder.insertAt("Tosho", 2)

        let expectedResult = 5;

        assert.equal(stringBuilder._stringArray.length, expectedResult)
    })

    it('check if insertAt works correctly', () => {
        let stringBuilder = new StringBuilder("Gosho");

        let actualResult = stringBuilder.insertAt("Tosho", 2)

        let expectedResult = 10;

        assert.equal(stringBuilder._stringArray.length, expectedResult)
    })

    it('check if insertAt 1 doesnt works correctly', () => {
        let stringBuilder = new StringBuilder();

        let actualResult = () => stringBuilder.insertAt(false, 2);

        let expectedResult = 'Argument must be string';

        assert.throw(actualResult, expectedResult)
    })
})

describe('remove', () => {
    

    it('check if remove works correctly', () => {
        let stringBuilder = new StringBuilder("Gosho");

        let actualResult = stringBuilder.remove(1, 3)

        let expectedResult = 'Go';

        assert.equal(stringBuilder.toString(), expectedResult)
    })

    it('check if remove works correctly', () => {
        let stringBuilder = new StringBuilder();

        let actualResult = stringBuilder.remove(1, 3)

        let expectedResult = '';

        assert.equal(stringBuilder.toString(), expectedResult)
    })
})

describe('toString', () => {
    

    it('check if toString works correctly', () => {
        let stringBuilder = new StringBuilder();

        let actualResult = stringBuilder.toString()

        let expectedResult = "";

        assert.equal(stringBuilder.toString(), expectedResult)
    })
})


