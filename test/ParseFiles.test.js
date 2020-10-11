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
        // 2. ACT
        const people = ParseFiles.parsePeople('|', testPeople);

        // 3. ASSERT
        expect(people[0].lastName).to.be.equal('aaa');
    });
});

describe('sortPeople()', function () {
    it('Sort people by last name ascending', function () {
      
        // 2. ACT
        const people = ParseFiles.parsePeople('|', testPeople);
        const sortedPeople = ParseFiles.sortPeople(people, 'lastName', true)
        // 3. ASSERT
        expect(sortedPeople[0].lastName).to.be.equal('aaa');
    });
});

describe('sortPeople()', function () {
    it('Sort people by DOB ascending', function () {
      
        // 2. ACT
        const people = ParseFiles.parsePeople('|', testPeople);
        const sortedPeople = ParseFiles.sortPeople(people, 'dateOfBirth', true)
        // 3. ASSERT
        expect(sortedPeople[0].lastName).to.be.equal('Jane');
    });
});

describe('readFile()', function () {
    it('Read file', async function () {
        // 2. ACT
        const fileName = './PeopleFiles/comma.txt'
        const peopleFromFile = await ParseFiles.readFile(fileName);
        // 3. ASSERT
        expect(peopleFromFile[0]).to.be.equal('LastName, FirstName, Gender, FavoriteColor, DateOfBirth');
    });
});