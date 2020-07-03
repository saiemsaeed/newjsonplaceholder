var _ = require('lodash');
var { Todo } = require('../../models/todo');

var addTodo = async (req, res, next) => {
    try {
        var body = _.pick(req.body, ['text', 'isCompleted', 'description'])
        var index = await Todo.find().countDocuments()
        var newTodo = await new Todo({
            text: body.text,
            userId: req.params.userId,
            description: body.description,
            id: index + 1
        })
        var addTodo = await newTodo.save();
        if (!addTodo) {

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
module.exports = addTodo;