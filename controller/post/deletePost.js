var _ = require('lodash');
var { Post } = require('../../models/post');

var deletePost = async (req, res, next) => {
    try {
        var result = await Post.findOne({ id: req.params.postId })
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
module.exports = deletePost;