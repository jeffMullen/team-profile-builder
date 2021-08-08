const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('officeNumber', () => {
        it('this.officeNumber should be equal to officeNumber argument', () => {
            const officeNumber = '22';

            const newManager = new Manager('Clara', '1', 'clara@whatever.com', officeNumber);

            expect(newManager.officeNumber).toEqual(officeNumber);
        })
    })
    describe('getRole()', () => {
        it('should return the string Manager', () => {
            const newManager = new Manager('Clara', '1', 'clara@whatever.com', '22');

            expect(newManager.getRole()).toEqual('Manager');
        })
    })
})