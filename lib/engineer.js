const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor() {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {

    }

    getRole() {
        return 'Engineer';
    }
}