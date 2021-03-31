const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    id: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
})
userSchema.plugin(unique);

class Conn {
    constructor() {
        mongoose.connect('mongodb://172.22.0.101:27017/user_db?authSource=admin', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            user: 'root',
            pass: 'example'
        }).then((conn) => {
            this.tableUser = conn.model('users', userSchema);
            return conn
        }).catch((e) => {
            console.error('ERRRRRRORRRR', e)
        });
    }

    async newUser(inputUser) {
        try {
            const newUser = new this.tableUser(inputUser);
            await newUser.save();
        } catch (e) {
            return e
        }
    }
    async getUser(inputUser) {
        try {
            return await this.tableUser.findOne({email: inputUser.email}).then((user) => {
                return bcrypt.compare(inputUser.password, user.password).then((pass) => {
                    if (pass) {
                        return {status:200, message: 'Logado', id: user.id}
                    } else {
                        return {status: 401, message: 'Senha incorreta'}
                    }
                }).catch((e) => {
                    return {status: 500, message: 'Usuário não encontrado'}
                })
            }).catch((e) => {
                return {status: 500, message: 'Usuário não encontrado'}
            });
        } catch (e) {
            return e
        }
    }
}

module.exports = Conn