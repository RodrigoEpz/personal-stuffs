const text = 'hola mundo';
const fruits= ['apple', 'melon', 'banana'];

test('It should contain a text', () => {
    expect(text).toMatch(/hola/);
})

test('do we have bananas?', () => {
    expect(fruits).toContain('banana')
})

test('Greater than', () => {
    expect(10).toBeGreaterThan(9)
});

test('Truly', () => {
    expect(true).toBeTruthy()
});

//callback
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}
//promise
const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if(!str) reject(Error('Error'))

        resolve(str.split("").reverse().join(""))
    })
}

test('Testing callback', () => {
    reverseString('hola', (str) => {
        expect(str).toBe('aloh')
    })
});

test('Testing promise', () => {
    return reverseString2('hola')
    .then(str => {
        expect(str).toBe('aloh')
    })
});

test('Testing async/await', async () => {
    const str = await reverseString2('hola')
    expect(str).toBe('aloh')
});

// afterEach(() => console.log("Despues de cada prueba"))
// afterAll(() => console.log("Despues de todas las pruebas"))

// beforeEach(() => console.log("Antes de cada prueba"))
// beforeAll(() => console.log("Antes de todas las pruebas"))
