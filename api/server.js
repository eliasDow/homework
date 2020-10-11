const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const record = require('./components/record/RecordRoutes');
const port = 3000;

//define routes from file
app.use(bodyParser.json());
app.use(record);
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
