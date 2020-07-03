const mongoose = require('mongoose');

var UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            required: true
        },
        profilephoto: {
            title: {
                type: String,
                required: true
            }, url: {
                type: String,
                required: true
            }, thumbnail: {
                type: String,
                required: true
            },
        },
    },
    { usePushEach: true }
);

var User = mongoose.model('User', UserSchema);
module.exports = { User };
