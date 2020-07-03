var _ = require('lodash');
var { Todo } = require('../../models/todo');

var deleteTodo = async (req, res, next) => {
    const { params } = req
    try {
        var result = await Todo.findOne({ userId: params.userId, id: params.todoId })
        var deleted = {}
        if (!result) {
            res.status(404).send(result);
        } else {
            res.status(200).send(deleted);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = deleteTodo;