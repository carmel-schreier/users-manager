const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
});

const User = mongoose.model('User', userSchema);

exports.User = User;