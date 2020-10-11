const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const ParseFiles = require('../../../ParseFiles');
const RecordService = require('./RecordService');

router.post('/records', bodyParser.text({type: '*/*'}), async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let separator = ParseFiles.findSeparator(req.body);
    if (req.body.split(separator).length !== 5) {
        res.status(400).send('Error. Bad request - invalid field length.')
    } else {
        let person = ParseFiles.parsePeople([req.body]);
        data.push(person[0]);
        res.send('Added new person');
    }
});

router.get('/records/gender', async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let sortedData = RecordService.sortPeople(data, 'gender', true);
    res.send({records: sortedData});
});

router.get('/records/birthdate', async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let sortedData = RecordService.sortPeople(data, 'dateOfBirth', true);
    res.send({records: sortedData});
});

/**
 * Assumption: sort by name means sort by last name
 */
router.get('/records/name', async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let sortedData = RecordService.sortPeople(data, 'lastName', true);
    res.send({records: sortedData});
});

module.exports = router;