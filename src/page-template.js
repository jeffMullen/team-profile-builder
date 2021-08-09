const managerArr = [];
const engineersArr = [];
const internsArr = [];

function sortEmployees(array) {
    console.log('HIT SORT EMPLOYEES');
    for (let i = 0; i < array.length; i++) {
        let newEmployee = array[i].getRole();

        if (newEmployee === 'Manager') {
            console.log(managerArr);
            managerArr.push(array[i]);
            console.log(managerArr);
        } else if (newEmployee === 'Engineer') {
            engineersArr.push(array[i]);
            console.log(engineersArr);
        } else {
            internsArr.push(array[i]);
        }
    }

    return generateHtml(managerArr, engineersArr, internsArr);

}

function managerCard(manager) {
    console.log(manager);
    return `
    <div class="card">
        <h2>${manager[0].name}</h2>
        <h3>${manager[0].getRole()}</h3>
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager[0].id}</li>
            <li class="list-group-item">Email: ${manager[0].email}</li>
            <li class="list-group-item">Office Number: ${manager[0].officeNumber}</li>
        </ul>
    </div>
    `
}

function engineerCard(engineer) {
    console.log(engineer);
};

function internCard(internsArr) {

}

function generateHtml(manager, engineer, intern) {
    console.log(manager);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>

        ${managerCard(manager)}
        ${engineerCard(engineer)}


        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

module.exports = {
    sortEmployees,
    generateHtml
};