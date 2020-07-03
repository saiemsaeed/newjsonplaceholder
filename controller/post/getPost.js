var _ = require('lodash');
var { Post } = require('../../models/post');


var getPost = async (req, res, next) => {
    try {
        var result = await Post.findOne({ id: req.params.postId }, '-_id -__v')
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
module.exports = getPost;