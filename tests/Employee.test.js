const sayHello = require('../utils/employee');

const mockConsole = jest.spyOn(console, 'log');
const mockConImp = mockConsole.mockImplementation(() => { });

describe('Employee', () => {
    describe('sayHello', () => {
        it('should return the statement: say hello', () => {
            mockConsole;
            mockConImp;
            mock.mockRestore();
            const string = 'Hello World!';

            const result = sayHello(string);


            expect(result).toEqual(string);

        })
    })
})