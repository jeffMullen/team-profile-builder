const manager = [];
const engineersArr = [];
const internsArr = [];

function sortEmployees(array) {
    for (let i = 0; i < array.length; i++) {
        let newEmployee = array[i].getRole();

        if (newEmployee === 'Manager') {
            manager.push(array[i]);
        } else if (newEmployee === 'Engineer') {
            engineersArr.push(array[i]);
        } else {
            internsArr.push(array[i]);
        }
    }
    console.log(manager);
    // managerCard(manager);
    // engineerCard(engineersArr);
    // internCard(internsArr);

    // generateHtml(manager, engineersArr, internsArr);

}

function managerCard(manager) {
    return `
    <div class="card">
        <p>I am a manager</p>
    </div>
    `
}

function engineerCard(engineersArr) {

};

function internCard(internsArr) {

}

function generateHtml(manager, engineersArr, internsArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    ${managerCard(manager)}

    </body>
    </html>`;
}

module.exports = {
    sortEmployees,
    generateHtml
};