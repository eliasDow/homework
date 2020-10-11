const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const record = require('./components/record/RecordRoutes');
const ParsePeople = require('../ParseFiles');
const port = 3000;

async function seedDataAndStart() {
    //will log rquired outputs and sets global data source
    //console.log(await ParsePeople.run());
    //console.log(await ParsePeople.globalPeople);
    //define routes from files
    app.use(bodyParser.json())
    app.use(record);
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
}

seedDataAndStart();

