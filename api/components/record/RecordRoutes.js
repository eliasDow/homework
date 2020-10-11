const express = require('express');
var router = express.Router();
const Person = require('./Record');
const ParseFiles = require('../../../ParseFiles');
const RecordService = require('./RecordService');

router.post('/records', async (req, res) => {
    let personBody = req.body;
    let data = await ParseFiles.globalPeople;
    data.push(new Person(personBody, true));
    res.send('Added new person');
});

router.get('/records/gender', async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let sortedData = RecordService.sortPeople(data, 'gender', true);
    res.send(sortedData);
});

router.get('/records/birthdate', async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let sortedData = RecordService.sortPeople(data, 'dateOfBirth', true);
    res.send(sortedData);
});

/**
 * Assumption: sort by name means sort by last name
 */
router.get('/records/name', async (req, res) => {
    let data = await ParseFiles.globalPeople;
    let sortedData = RecordService.sortPeople(data, 'lastName', true);
    res.send(sortedData);
});

module.exports = router;