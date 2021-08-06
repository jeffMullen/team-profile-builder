const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');

// || Eventual array to send to page-template
const responseArray = [];

// || Initial prompt
const managerPrompt = [
    {
        type: 'input',
        message: 'Team Manager Name',
        name: 'manager'
    },
    {
        type: 'input',
        message: 'Employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Manager Email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Office Number',
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
const employeePrompt = [
    {
        type: 'input',
        message: 'Write something',
        name: 'employee'
    }
];

function init() {
    inquirer
        .prompt(managerPrompt)
        .then(response => {
            responseArray.push(response);
            console.log(responseArray);
            addTeamMember();
        })

}

function addTeamMember() {
    inquirer
        .prompt(teamQuery)
        .then(answer => {
            // if engineer or intern then call employeeDetails, otherwise end
            if (answer.addTeam === 'Engineer' || answer.addTeam === 'Intern') {
                employeeDetails()
            } else {
                sendForGeneration(responseArray);
            }
        })
}

function employeeDetails() {
    inquirer
        .prompt(employeePrompt)
        .then(response => {
            responseArray.push(response);
            addTeamMember();
        })
}

function sendForGeneration(response) {
    console.log(response);
}

init();