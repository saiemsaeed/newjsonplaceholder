var _ = require('lodash');
var { User } = require('../../models/user');
var js2xmlparser = require("js2xmlparser");
var convert = require('xml-js');
var getAllUsers = async (req, res, next) => {
    try {
        if (req.query.name) {
            var result = await User.find({ name: req.query.name }, '-_id -__v')
        } else {
            var result = await User.find({}, '-_id -__v ')
        }
        if (!result) {
            res.status(404).send(result);
        } else {
            if (req.query.type == 'xml') {
                var xml = [...result]
                let arr = []
                xml.forEach(a => {
                    arr.push(js2xmlparser.parse("Person", a._doc))
                })
                res.status(200).send(arr);
            }
            else {
                res.status(200).send(result);
            }
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = getAllUsers;