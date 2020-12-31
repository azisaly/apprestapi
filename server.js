const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parser ApplicationJson

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});