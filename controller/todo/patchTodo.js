var _ = require('lodash');
var { Todo } = require('../../models/todo');

var patchTodo = async (req, res, next) => {
    try {
        const { params } = req
        req.body.updated = Date.now()
        var result = await Todo.findOne({ userId: params.userId, id: params.todoId })
        if (!result) {
            res.status(404).send();
        } else {
            res.status(200).send(req.body);
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err.message)
    }
}
module.exports = patchTodo;