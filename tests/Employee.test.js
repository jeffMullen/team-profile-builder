const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return employee name', () => {
            const name = 'Jeff';

            const newEmployee = new Employee(name, '1', 'whatever');

            expect(newEmployee.getName()).toEqual(name);

        })
    })
})