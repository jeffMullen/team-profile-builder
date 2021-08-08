const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('school', () => {
        it('this.school should equal the school argument', () => {
            const school = 'PSU';

            const newIntern = new Intern('Vlad', '3', 'vlad@whatever.com', school);

            expect(newIntern.school).toEqual(school);
        })
    })
    describe('getSchool()', () => {
        it('should return the value of the school argument', () => {
            const school = 'PSU';

            const newIntern = new Intern('Vlad', '3', 'vlad@whatever.com', school);

            expect(newIntern.getSchool()).toEqual(school);
        })
    })
    describe('getRole()', () => {
        it('should return the string Intern', () => {
            const newIntern = new Intern('Vlad', '3', 'vlad@whatever.com', 'PSU');

            expect(newIntern.getRole()).toEqual('Intern');
        })
    })
})