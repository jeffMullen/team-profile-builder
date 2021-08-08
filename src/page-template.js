const manager = [];
const engineersArr = [];
const internsArr = [];

function createCard(array) {
    for (let i = 0; i < array.length; i++) {
        let newEmployee = array[i].getRole();
        console.log(newEmployee);

        if (newEmployee === 'Manager') {
            manager.push(array[i]);
        } else if (newEmployee === 'Engineer') {
            engineersArr.push(array[i]);
        } else {
            internsArr.push(array[i]);
        }
    }

    console.log(manager);
    console.log(engineersArr);
    console.log(internsArr);

}

module.exports = createCard;