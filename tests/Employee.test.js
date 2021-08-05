const sayHello = require('../utils/employee');

describe('Employee', () => {
    describe('sayHello', () => {
        it('should return the statement: say hello', () => {
            const string = 'Hello World!';

            const result = sayHello(string);

            expect(result).toEqual(string);


        })
    })
})