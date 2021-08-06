const Employee = require('./employee.js')

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}