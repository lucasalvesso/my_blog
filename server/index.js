const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3009;
require('dotenv-safe').config({example: '.env'});

const userRoutes = require('./src/routes/index')

app.use(bodyParser.json({
    limit: '100mb'
}));

app.use('/', userRoutes);

app.listen(port);
