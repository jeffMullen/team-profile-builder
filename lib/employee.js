class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return 'Employee';
    }
}

const sayHello = (string) => {
    console.log(string);
    return string;
}

module.exports = {
    sayHello,
    Employee
};