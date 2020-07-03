var _ = require('lodash');
var { Post } = require('../../models/post');

var addPost = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['title', 'body', 'userId'])

        var index = await Post.find().countDocuments()
        var newPost = await new Post({
            title: body.title,
            userId: body.userId,
            body: body.body,
            id: index + 1
        })
        var addPost = await newPost.save();
        if (!addPost) {

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
module.exports = addPost;