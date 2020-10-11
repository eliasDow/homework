const express = require('express');
var router = express.Router();

router.post('/records');

router.get('/records/gender');

router.get('/records/birthdate');

router.get('/records/name');