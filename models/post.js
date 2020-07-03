const mongoose = require('mongoose');

var PostSchema = mongoose.Schema(
    {
        userId: {
            type: Number,
            ref: 'user',
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        updated: {
            type: Date,
            required: true,
            default: Date.now()
        },
    },
    { usePushEach: true }
);

var Post = mongoose.model('Post', PostSchema);
module.exports = { Post };
