const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const validToken = jwt.verify(req.headers.authorization, process.env.jwt_keyword);
        if (validToken && validToken.id) {
            res.status(200).send({message: 'jwt ok'})
        }
    } catch (e) {
        res.status(401).send({error: e})
    }
}