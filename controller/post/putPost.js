var _ = require('lodash');
var { Post } = require('../../models/post');

var putPost = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['title', 'body'])
        req.body.updated = Date.now()
        var result = await Post.findOne({ id: req.params.postId }, '-_id -__v')

        if (body.title) {
            result.title = body.title
        }
        if (body.body) {
            result.body = body.body
        }

        if (!result) {
            res.status(404).send()
        } else {
            res.status(200).send(result);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = putPost;