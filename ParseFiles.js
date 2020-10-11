const fs = require('fs').promises;
const Person = require('./api/components/record/Record');

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

function sortPeople(people, sortField, ascending = true) {
    if(sortField === 'dateOfBirth') {
        return people.sort((a, b) => {
            if(a.dateOfBirth > b.dateOfBirth) {
                return ascending ? 1 : -1;
            } else if(a.dateOfBirth < b.dateOfBirth) {
                return ascending ? -1 : 1
            }
            return 0;
        });
    } else {
        return people.sort((a, b) => {
            if(a[sortField].localeCompare(b[sortField]) > 0) {
                return ascending ? 1 : -1;
            } else if(a[sortField].localeCompare(b[sortField]) < 0) {
                return ascending ? -1 : 1
            }
            return 0;
        });
    }
}

async function run() {
    let file = await readFile('./PeopleFiles/comma.txt');
    file = await readFile('./PeopleFiles/pipe.txt');
    let peeps = parsePeople('|', file);
    let sorted = sortPeople(peeps, 'lastName', true)
    console.log(sorted);
}
run()

module.exports = {
    parsePeople,
    readFile,
    sortPeople
};
