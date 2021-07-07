const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
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
            this.tableUser = conn.model('users', userSchema, 'user_db');
            this.tableUser.on('error', console.error.bind(console, 'connection error:'));
            this.tableUser.once('open', () => {
                console.log('Connection Successful!');
            });
        }).catch((e) => {
            console.error('ERRRRRRORRRR', e)
        });
    }
}

module.exports = Conn