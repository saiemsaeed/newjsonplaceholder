var _ = require('lodash');
var { Post } = require('../../models/post');

var patchPost = async (req, res, next) => {
    try {
        req.body.updated = Date.now()
        var result = await Post.findOne({ id: req.params.postId })
        if (!result) {
            res.status(404).send()
        } else {
            res.status(200).send(req.body);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = patchPost;