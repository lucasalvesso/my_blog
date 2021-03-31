const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.use('/', async (req, res, next) => {
    try {
        const validToken = jwt.verify(req.headers.authorization, process.env.jwt_keyword)
        if (validToken && validToken.id && validToken) {
            next()
        } else {
            res.status(400).send('Precisa de autenticação!');
        }
    } catch (e) {
        res.status(401).send(e)
    }
});

module.exports = router