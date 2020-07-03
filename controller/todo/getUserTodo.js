var _ = require('lodash');
var { Todo } = require('../../models/todo');

var getUserTodo = async (req, res, next) => {
    const { params } = req
    try {
        var result = await Todo.findOne({ userId: params.userId, id: params.todoId }, '-_id -__v')
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
module.exports = getUserTodo;