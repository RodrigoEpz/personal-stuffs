const randomStrings = require('../index')

describe('Probar features of randomStrings', () => {
    test('Test functionality', () => {
        expect(typeof(randomStrings())).toBe('string')
    });
    test('should fail with unexisting city', () => {
        expect(typeof(randomStrings())).not.toMatch(/Cordoba/)
    });    
})