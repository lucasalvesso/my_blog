const express = require('express');
const router = express.Router();
const validateToken = require('./validateToken');

router.use('/', async (req, res, next) => {
    try {
        const valid = await validateToken(req, res, next);
        if (valid) {
            res.status(200).send({message: 'Login válido'})
        } else {
            res.status(400).send({message: 'Login não é válido!'});
        }
    } catch (e) {
        res.status(401).send({code: 401, message: 'Precisa de autenticação!'})
    }
});

module.exports = router