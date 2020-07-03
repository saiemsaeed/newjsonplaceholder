const mongoose = require('mongoose');

var TodoSchema = mongoose.Schema(
    {
        userId: {
            type: Number,
            ref: 'user'
        },
        id: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        isCompleted: {
            default: false,
            type: Boolean,
            required: true
        },
        description: {
            type: String
        },
        updated: {
            type: Date,
            required: true,
            default: Date.now()
        },
    },
    { usePushEach: true }
);

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = { Todo };
