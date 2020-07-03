var _ = require('lodash');
var { User } = require('../../models/user');

var patchUser = async (req, res, next) => {
    try {
        var result = await User.findOne({ id: req.params.userId })

        if (!result) {
            res.status(404).send();
        } else {
            res.status(200).send(req.body);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = patchUser;