var _ = require('lodash');
var { User } = require('../../models/user');

var putUser = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['name', 'age', 'email', 'profilephoto'])
        var result = await User.findOne({ id: req.params.userId }, '-_id -__v')
        if (body.name) {
            result.name = body.name
        }
        if (body.age) {
            result.age = body.age
        }
        if (body.email) {
            result.email = body.email
        }
        if (body.profilephoto) {
            result.profilephoto.title = body.profilephoto.title
            result.profilephoto.url = body.profilephoto.url
            result.profilephoto.thumbnail = body.profilephoto.thumbnail
        }
        console.log(result)
        if (!result) {
            res.status(404).send();
        } else {
            res.status(200).send(result);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = putUser;