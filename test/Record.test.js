const expect = require('chai').expect;
const Person = require('../api/components/record/Record');

const testPostRecord = {
    lastName: "zzzzzzz",
    firstName: "aaaaa",
    gender: "female",
    favoriteColor: "brown",
    dateOfBirth: "03/02/2018"
}

const testParseRecord = [
    "Holmes",
    "Sherlock",
    "female",
    "brown",
    "03/02/2018"
]

describe('constructor()', function () {
    it('Test constructor with post body', function () {      
        // 2. ACT
        let record = new Person(testPostRecord, true);

        // 3. ASSERT
        expect(record.lastName).to.be.equal('zzzzzzz');
    });
});

describe('constructor()', function () {
    it('Test constructor without post body', function () {      
        // 2. ACT
        let record = new Person(testParseRecord);

        // 3. ASSERT
        expect(record.lastName).to.be.equal('Holmes');
    });
});
