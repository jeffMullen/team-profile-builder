const manager = [];
const engineersArr = [];
const internsArr = [];

function sortEmployees(array) {
    console.log('HIT SORT EMPLOYEES');
    for (let i = 0; i < array.length; i++) {
        let newEmployee = array[i].getRole();

        if (newEmployee === 'Manager') {
            manager.push(JSON.stringify(array[i]));
            console.log(`Manager ${manager}`);
        } else if (newEmployee === 'Engineer') {
            engineersArr.push(array[i]);
        } else {
            internsArr.push(array[i]);
        }
    }
    // managerCard(manager);
    // engineerCard(engineersArr);
    // internCard(internsArr);

    return generateHtml(manager, engineersArr, internsArr);

}

function managerCard(manager) {
    const parsedManager = JSON.parse(manager);
    console.log(`managerCard ${parsedManager}`);
    return `
    <div class="card">
        <h2>${parsedManager.name}</h2>
        <h3>Manager</h3>
        <ul class="list-group">
            <li class="list-group-item">ID: ${parsedManager.id}</li>
            <li class="list-group-item">Email: ${parsedManager.email}</li>
            <li class="list-group-item">Office Number: ${parsedManager.officeNumber}</li>
        </ul>
    </div>
    `
}

function engineerCard(engineersArr) {

};

function internCard(internsArr) {

}

function generateHtml(manager, engineersArr, internsArr) {
    console.log(`generateHTML ${manager}`);
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

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

module.exports = {
    sortEmployees,
    generateHtml
};