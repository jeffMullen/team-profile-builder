const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const functions = require('./src/page-template');

// || Eventual array to send to page-template
const responseArray = [];

// || Initial prompt
const managerPrompt = [
    {
        type: 'input',
        message: 'Team Manager Name:',
        name: 'manager',
        validate: input => {
            return (input ? true : console.log('Please enter a name'));
        }
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Manager Email:',
        name: 'email',
        validate: email => {

            const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            return (valid ? true : console.log('  Please enter a valid email'));
        }
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'office',
        validate: officeNumber => {
            return (parseInt(officeNumber) ? true : console.log('  Please enter an office number'));
        }
    }
];

// || Prompt asking to add another team member
const teamQuery = [
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        choices: ['Engineer', 'Intern', 'Finish building team'],
        name: 'addTeam'
    }

]

// || Prompt that runs after the manager prompt runs
const engineerPrompt = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'engineer',
        validate: input => {
            return (input ? true : console.log('Please enter a name'));
        }
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Employee Email:',
        name: 'email',
        validate: email => {

            const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            return (valid ? true : console.log('  Please enter a valid email'));
        }
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
        validate: github => {
            return (github ? true : console.log('Please enter a GitHub username'));
        }
    }
];

const internPrompt = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'intern',
        validate: input => {
            return (input ? true : console.log('Please enter a name'));
        }
    },
    {
        type: 'input',
        message: 'Intern ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Intern Email:',
        name: 'email',
        validate: email => {

            const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            return (valid ? true : console.log('  Please enter a valid email'));
        }
    },
    {
        type: 'input',
        message: 'School:',
        name: 'school',
        validate: school => {
            return (school ? true : console.log('Please enter a school'));
        }
    }
];

function init() {
    inquirer
        .prompt(managerPrompt)
        .then(response => {
            const manager = new Manager(response.manager, response.id, response.email, response.office)
            console.log(manager);
            responseArray.push(manager);
            addTeamMember();
        })

}

function addTeamMember() {
    inquirer
        .prompt(teamQuery)
        .then(answer => {
            // if engineer or intern then call their function, otherwise end inquirer
            if (answer.addTeam === 'Engineer') {
                engineerDetails(engineerPrompt)
            } else if (answer.addTeam === 'Intern') {
                internDetails(internPrompt)
            } else {
                sendForGeneration(responseArray);
            }
        })
}

function engineerDetails(prompt) {
    inquirer
        .prompt(prompt)
        .then(response => {
            const engineer = new Engineer(response.engineer, response.id, response.email, response.github);
            responseArray.push(engineer);
            addTeamMember();
        })
}

function internDetails(prompt) {
    inquirer
        .prompt(prompt)
        .then(response => {
            const intern = new Intern(response.intern, response.id, response.email, response.school);
            responseArray.push(intern);
            addTeamMember();
        })
}

function sendForGeneration(responseArr) {
    fs.writeFile('./dist/team.html', functions.sortEmployees(responseArr),
        err => err ? console.log(err) : console.log('Your HTML file has been created!'));
}

init();