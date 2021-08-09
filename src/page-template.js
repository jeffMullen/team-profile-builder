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
    <div class="card m-3 col-3">
        <div class="p-3">
            <h2>${manager[0].name}</h2>
            <h3>${manager[0].getRole()}</h3>
        </div>
        <div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager[0].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></li>
            <li class="list-group-item">Office Number: ${manager[0].officeNumber}</li>
        </ul>
        </div>
    </div>
    `
}

function engineerCard(engineer) {
    let engineerCardStr = '';

    // || Loop through array of engineers and concatenate strings together each time
    for (let i = 0; i < engineer.length; i++) {
        engineerCardStr = engineerCardStr + `
    <div class="card m-3 col-3">
        <div class="p-3">
            <h2>${engineer[i].name}</h2>
            <h3>${engineer[i].getRole()}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer[i].id}</li >
            <li class="list-group-item">Email: <a href="mailto:${engineer[i].email}">${engineer[i].email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer[i].github}" target="_blank">${engineer[i].github}</a></li>
        </ul >
    </div >
        `
    }
    return engineerCardStr;

};

function internCard(intern) {
    let internCardStr = '';

    // || Loop through array of engineers and concatenate strings together each time
    for (let i = 0; i < intern.length; i++) {
        internCardStr = internCardStr + `
    <div class="card m-3 col-3">
        <div class="p-3">
            <h2>${intern[i].name}</h2>
            <h3>${intern[i].getRole()}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern[i].id}</li >
            <li class="list-group-item">Email: <a href="mailto:${intern[i].email}">${intern[i].email}</a></li>
            <li class="list-group-item">School: ${intern[i].school}</li>
        </ul >
    </div >
        `
    }
    return internCardStr;
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
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1 class="text-center py-5">My Team</h1>
            </header>
            <main class="container">
                <div class="row d-flex justify-content-around">

                    ${managerCard(manager)}
                    ${engineerCard(engineer)}
                    ${internCard(intern)}

                </div>


                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </main>
        </body>
    </html>`;
}

module.exports = {
    sortEmployees,
    generateHtml
};