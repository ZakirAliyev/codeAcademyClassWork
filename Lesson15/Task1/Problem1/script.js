function createPerson(firstname, lastname, age, getFullName, getBirthYear) {
    const person = {
        firstname,
        lastname,
        age
    };
    getFullName(person);
    getBirthYear(person);
    return person;
}


function getFullName(person) {
    console.log(`Full Name: ${person.firstname + ' ' + person.lastname}`);
}

function getBirthYear(person) {
    console.log(`Birht Year: ${new Date().getFullYear() - person.age}`);
}


createPerson('Jim', 'Kerry', 54, getFullName, getBirthYear); 
