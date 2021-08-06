const Employee = require('./employee.js');

class Intern extends Employee {
    constructor() {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;