const expect = require('chai').expect;
const Person = require('../api/components/record/Record');

const testParseRecord = [
    "Holmes",
    "Sherlock",
    "female",
    "brown",
    "03/02/2018"
]

describe('constructor()', function () {
    it('Test constructor without post body', function () {      
        let record = new Person(testParseRecord);
        expect(record.lastName).to.be.equal('Holmes');
    });
});
