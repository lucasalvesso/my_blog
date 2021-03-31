const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const Conn = require('../db/connection');
const conn = new Conn();
const errorsLib = require('../../utils/validate');

exports.login = async (req, res, next) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password,
        }
        const getUser = await conn.getUser(user);

        if (getUser && getUser.status === 200) {
            getUser.token = jwt.sign({id: getUser.id}, process.env.jwt_keyword, {
                expiresIn: 3600
            })
            res.send(getUser)
        } else {
            res.status(401).send(getUser)

        }
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.signup = async (req, res, next) => {
    try {
        const newUser = {
            id: uuid(),
            email: req.body.email,
            name: req.body.name,
        }
        newUser.password = await bcrypt.hash(req.body.password, 10).then((val) => {
            return val
        })
        const create = await conn.newUser(newUser);
        if ('errors' in create) {
            res.status(400).send(errorsLib.errors(create.errors));
        } else {
            res.status(200).send('Criado com sucesso!')
        }
    } catch (e) {
        res.status(400).send(e)
    }
}