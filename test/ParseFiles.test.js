const expect = require('chai').expect;
const ParseFiles = require('../ParseFiles');

const testPeople = [
    'aaa | aaa | Male | brown | 02/14/1981',
    'Hickory | Hall | Male | red | 03/15/1900',
    'Smith | John | Male | brown | 02/14/1980',
    'Jane | John | female | brown | 02/14/1900',
    'zzz | aaa | Male | brown | 02/14/1981',
];

describe('parsePeople()', function () {
    it('Parse people', function () {      
        const people = ParseFiles.parsePeople('|', testPeople);
        expect(people[0].lastName).to.be.equal('aaa');
    });
});

describe('readFile()', function () {
    it('Read file', async function () {
        const fileName = './PeopleFiles/comma.txt'
        const peopleFromFile = await ParseFiles.readFile(fileName);
        expect(peopleFromFile[0]).to.be.equal('UnitTestLastName, FirstName, Female, FavoriteColor, 02/02/2000');
    });
});

describe('combinePeople()', function () {
    it('Combine people function', async function () {
        const combined = await ParseFiles.combinePeople();
        expect(combined.length).to.be.greaterThan(0);
        expect(combined[0].lastName).to.be.equal('UnitTestLastName');
    });
});

describe('findSeparator()', function () {
    it('Test function to find separator | in string', async function () {
        const separator = ParseFiles.findSeparator('Test | Test');
        expect(separator).to.be.equal('|');
    });
    it('Test function to find separator , in string', async function () {
        const separator = ParseFiles.findSeparator('Test , Test');
        expect(separator).to.be.equal(',');
    });
    it('Test function to find separator space in string', async function () {
        const separator = ParseFiles.findSeparator('Test Test');
        expect(separator).to.be.equal(' ');
    });
});
