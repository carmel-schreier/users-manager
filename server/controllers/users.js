const {
    User
} = require('../models/users');

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await User.find({});
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).send('error getting users');
        }
    },

    add: async function (req, res, next) {
        try {
            const newUser = new User(req.body); // todo: add validation
            const result = await newUser.save();
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(400).send('error adding user');
        }
    },

    delete: async function (req, res, next) {
        try {
            await User.deleteOne({
                _id: req.body._id
            }).exec();
            res.json({
                _id: req.body._id
            });
        } catch (err) {
            console.log(err);
            res.status(400).send('error delete user');
        }
    }
}