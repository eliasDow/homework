//Read 3 files
//Parse each file into one collection/array/structure of people objects
const fs = require('fs').promises;

class Person {
    // constructor(lastName, firstName, gender, favoriteColor, dateOfBirth) {
    //     this.lastName = lastName;
    //     this.firstName = firstName;
    //     this.gender = gender;
    //     this.favoriteColor = favoriteColor;
    //     this.dateOfBirth = dateOfBirth;
    // }

    constructor(personArray) {
        this.lastName = personArray[0].trim();
        this.firstName = personArray[1].trim();
        this.gender = personArray[2].trim();
        this.favoriteColor = personArray[3].trim();
        this.dateOfBirth = personArray[4].trim();
    }
}

async function readFile(fileName) {
    const file = await fs.readFile(fileName, 'utf8');
    return file.split('\n');
}

function parsePeople(separator, fileData) {
    let people = [];
    for (const person of fileData) {
        const splitPerson = person.split(separator);
        people.push(new Person(splitPerson))
    }
    return people;
}

async function run() {
    let file = await readFile('./PeopleFiles/comma.txt');
    file = await readFile('./PeopleFiles/pipe.txt');
    let peeps = parsePeople('|', file);
    peeps.sort((a, b) => a.lastName.localeCompare(b.lastName));
    console.log(peeps);
}
run()

