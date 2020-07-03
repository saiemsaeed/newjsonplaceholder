var _ = require('lodash');
var { Todo } = require('../../models/todo');

var putTodo = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['text', 'isCompleted', 'description'])
        req.body.updated = Date.now()
        var result = await Todo.findOne({ userId: req.params.userId, id: req.params.todoId })
        if (body.isCompleted) {
            result.isCompleted = body.isCompleted
        }
        if (body.text) {
            result.text = body.text
        }
        if (body.description) {
            result.description = body.description
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.status(200).send(result);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = putTodo;