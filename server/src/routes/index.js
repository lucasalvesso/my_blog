const express = require('express')
const router = express.Router()
const userAuth = require('./user')
// const getInfo = require('./sendInfo')
// const validAuth = require('../auth/index')

router.post('/user/login', userAuth.login);
router.post('/user/signup', userAuth.signup);
router.post('/user/verifytoken', userAuth.verifytoken);
// router.post('/info', validAuth, getInfo.sendInfo);

module.exports = router