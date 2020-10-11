const fs = require('fs').promises;
const Person = require('./api/components/record/Record');
const RecordService = require('./api/components/record/RecordService');

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

async function combinePeople() {
    const fileNames = [{separator: ',', file:'comma.txt'}, {separator: '|', file:'pipe.txt'}, {separator: ' ', file:'space.txt'}];
    let people = [];
    const list = await Promise.all(fileNames.map(async file => {
        // return a promise
        return new Promise(async (resolve) => {
            let fileRead = await readFile('./PeopleFiles/'+file.file);
            let parse = parsePeople(file.separator, fileRead);
            resolve(people.concat(parse));
        });
    }))
    return Promise.resolve(list.flat());
}
    

async function run() {
    const allPeople = await combinePeople();
    console.log('---------------------------------------------');
    console.log('Sorted by gender (females before males) then by last name ascending.');
    console.log(RecordService.sortPeopleByTwoFields(allPeople, ['gender', 'lastName'], true));
    // console.log('---------------------------------------------');
    // console.log('Sorted by birth date, ascending.');
    // console.log(sortPeople(allPeople, 'dateOfBirth', true))
    // console.log('---------------------------------------------');
    // console.log('Sorted by last name, descending.');
    // console.log(sortPeople(allPeople, 'lastName', false))
    // console.log('---------------------------------------------');
    
    //console.log(global);
    return allPeople;
}
const globalPeople = Promise.resolve(run());
module.exports = {
    parsePeople,
    readFile,
    run,
    combinePeople,
    globalPeople
};
