const express = require('express');
const app = express();
const record = require('./components/record/RecordRoutes');
const port = 3000;

//define routes from files
app.use(record);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))