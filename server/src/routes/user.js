const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const Conn = require('../db/connection');
const conn = new Conn();
const validateToken = require('../auth/validateToken');

exports.login = async (req, res, next) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password,
        }

        await conn.tableUser.findOne({email: user.email}).then((result) => {
            return bcrypt.compare(user.password, result.password).then((pass) => {
                if (pass) {
                    const getUser = {
                        token: jwt.sign({id: result.id}, process.env.jwt_keyword, {
                            expiresIn: 36
                        }),
                        id: result.id
                    }
                    res.status(200).send({message: 'Login efetuado com sucesso!', user: getUser})
                } else {
                    res.status(401).send({message: 'Senha incorreta'})
                }
            }).catch((e) => {
                res.status(500).send({message: 'Usuário não encontrado', error: e})
            })
        }).catch((e) => {
                res.status(500).send({message: 'Usuário não encontrado', error: e})
        })
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.signup = async (req, res, next) => {
    try {
        const newUser = {
            id: uuidv4(),
            email: req.body.email,
            name: req.body.name,
        }
        newUser.password = await bcrypt.hash(req.body.password, 10).then((val) => {
            return val
        })

        const obj = new conn.tableUser(newUser);
        await obj.save(async (err) => {
            if (err) {
                res.status(400).send({message: err.message});
            } else {
                await this.login(req, res, next);
                // res.status(200).send('Criado com sucesso!')
            }
        })
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.verifytoken = async (req, res, next) => {
    try {
        await validateToken(req, res, next)
    } catch (e) {
        res.status(400).send(e)
    }
}