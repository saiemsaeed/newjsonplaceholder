var _ = require('lodash');
var { User } = require('../../models/user');
var js2xmlparser = require("js2xmlparser");

var getUser = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['name', 'age', 'title', 'description'])
        var result = await User.findOne({ id: req.params.userId }, '-_id -__v ')
        if (!result) {
            res.status(404).send(result);
        } else {
            if (req.query.type == 'xml') {
                var xml = { ...result }
                res.status(200).send(js2xmlparser.parse("Person", xml._doc));
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
module.exports = getUser;