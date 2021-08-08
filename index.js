const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const functions = require('./src/page-template');
const generateHtml = require('./src/page-template');

// || Eventual array to send to page-template
const responseArray = [];

// || Initial prompt
const managerPrompt = [
    {
        type: 'input',
        message: 'Team Manager Name:',
        name: 'manager'
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Manager Email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'office'
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
        name: 'engineer'
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Employee Email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github'
    }
];

const internPrompt = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'intern'
    },
    {
        type: 'input',
        message: 'Intern ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Intern Email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'School:',
        name: 'school'
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
    functions.sortEmployees(responseArr);
    fs.writeFile('./dist/team.html', functions.generateHtml(),
        err => err ? console.log(err) : console.log('Success!'));
}

init();