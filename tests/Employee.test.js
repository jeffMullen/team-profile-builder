const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('name', () => {
        it('this.name should be equal to the argument for name', () => {
            const name = 'Jeff';

            const newEmployee = new Employee(name, '1', 'whatever@whatever.com');

            expect(newEmployee.name).toEqual(name);
        })
    })
    describe('id', () => {
        it('this.id should be equal to the argument for id', () => {
            const id = '1';

            const newEmployee = new Employee('Jeff', id, 'whatever@whatever.com');

            expect(newEmployee.id).toEqual(id);
        })
    })
    describe('email', () => {
        it('this.email should be equal to the argument for email', () => {
            const email = 'whatever@whatever.com';

            const newEmployee = new Employee('Jeff', '1', email);

            expect(newEmployee.email).toEqual(email);
        })
    })
    describe('getName', () => {
        it('should return employee name that was passed in', () => {
            const name = 'Jeff';

            const newEmployee = new Employee(name, '1', 'whatever@whaterver.com');

            expect(newEmployee.getName()).toEqual(name);

        })
    })
    describe('getId', () => {
        it('should return the id that was passed in', () => {
            const id = '1';

            const newEmployee = new Employee('Jeff', id, 'whatever@whatever.com');

            expect(newEmployee.getId()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return email that was passed in', () => {
            const email = 'whatever@whatever.com';

            const newEmployee = new Employee('Jeff', '1', email);

            expect(newEmployee.getEmail()).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('should return Employee', () => {
            const newEmployee = new Employee('Jeff', '1', 'whatever@whatever.com');

            expect(newEmployee.getRole()).toEqual('Employee');
        })
    })
})