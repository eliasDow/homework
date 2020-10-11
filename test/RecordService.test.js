const expect = require('chai').expect;
const RecordService = require('../api/components/record/RecordService');
const ParseFiles = require('../ParseFiles');
const testPeople = [
    'aaa | aaa | Male | brown | 02/14/1981',
    'Hickory | Hall | Male | red | 03/15/1900',
    'Smith | John | Male | brown | 02/14/1980',
    'Jane | John | female | brown | 02/14/1900',
    'zzz | aaa | Male | brown | 02/14/1981',
];

describe('sortPeople()', function () {
    it('Sort people by last name ascending', function () {
        const people = ParseFiles.parsePeople('|', testPeople);
        const sortedPeople = RecordService.sortPeople(people, 'lastName', true)
        expect(sortedPeople[0].lastName).to.be.equal('aaa');
    });
});

describe('sortPeople()', function () {
    it('Sort people by DOB ascending', function () {
        const people = ParseFiles.parsePeople('|', testPeople);
        const sortedPeople = RecordService.sortPeople(people, 'dateOfBirth', true)
        expect(sortedPeople[0].lastName).to.be.equal('Jane');
    });
});