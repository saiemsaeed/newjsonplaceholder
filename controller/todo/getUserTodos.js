var _ = require('lodash');
var { Todo } = require('../../models/todo');

var getUserTodos = async (req, res, next) => {
    try {
        var result = await Todo.find({ userId: req.params.userId }, '-_id -__v')
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
module.exports = getUserTodos;