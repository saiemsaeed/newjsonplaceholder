var _ = require('lodash');
var { User } = require('../../models/user');

var addUser = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['name', 'age', 'email', 'profilephoto'])
        var index = await User.find().countDocuments()
        var newUser = await new User({
            name: body.name,
            age: body.age,
            email: body.email,
            profilephoto: body.profilephoto,
            id: index + 1
        })
        var addUser = await newUser.save();
        if (!addUser) {

        }
        else {
            res.status(200).send();
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = addUser;