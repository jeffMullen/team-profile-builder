

function createCard(array) {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        let newEmployee = Array[i].getRole();
        console.log(newEmployee);
    }

}

module.exports = createCard;