var _ = require('lodash');
var { User } = require('../../models/user');

var deleteUser = async (req, res, next) => {
    try {
        var result = await User.findOneAndDelete({ id: req.params.userId })
        var deleted = {}
        if (!result) {
            res.status(404).send();
        } else {
            res.status(200).send(deleted);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = deleteUser;