const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3009;
require('dotenv-safe').config({example: '.env'});

app.use(bodyParser.json({
    limit: '100mb'
}));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));


const userRoutes = require('./src/routes/index')

app.use('/', userRoutes);

app.listen(port);
