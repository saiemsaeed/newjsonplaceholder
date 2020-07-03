var _ = require('lodash');
var { Post } = require('../../models/post');


var getAllPosts = async (req, res, next) => {
    try {
        if (req.query.title) {
            var result = await Post.find({ title: req.query.title }, '-_id -__v')
        } else if (req.query.userId) {
            var result = await Post.find({ userId: req.query.userId }, '-_id -__v')
        }
        else {
            var result = await Post.find({}, '-_id -__v')
        }
        if (!result) {
            res.status(404).send(result);
        } else {

            res.status(200).send(result);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = getAllPosts;