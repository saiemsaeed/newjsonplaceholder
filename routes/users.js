const express = require('express'),
    router = express.Router();
var addUser = require('../controller/user/addUser');
var getUser = require('../controller/user/getUser');
var getAllUsers = require('../controller/user/getAllUsers')
var putUser = require('../controller/user/putUser')
var patchUser = require('../controller/user/patchUser')
var deleteUser = require('../controller/user/deleteUser')
var addTodo = require('../controller/todo/addTodo')
var getUserTodos = require('../controller/todo/getUserTodos')
var getUserTodo = require('../controller/todo/getUserTodo')
var deleteTodo = require('../controller/todo/deleteTodo')
var patchTodo = require('../controller/todo/patchTodo')
var putTodo = require('../controller/todo/putTodo')

////////////////////////////// Get All Users  ////////////////////////////////////////

router.get('/', getAllUsers)

///////////////////////////// Get User With Id ///////////////////////////////////////

router.get('/:userId', getUser)

/////////////////////////////  Get todos of specific user ////////////////////////////

router.get('/:userId/todos/', getUserTodos)

///////////////////////////// Get Specific Todo of Specific User /////////////////////

router.get('/:userId/todos/:todoId', getUserTodo)

/////////////////////////////// Post User ////////////////////////////////////////////

router.post('/', addUser)

////////////////////////////// Post Todo ////////////////////////////////////////////

router.post('/:userId/todos/', addTodo)

/////////////////////////////// Put User ////////////////////////////////////////////

router.put('/:userId/', putUser)

/////////////////////////////// Put specific todo of specific user //////////////////

router.put('/:userId/todos/:todoId/', putTodo)

/////////////////////////////// Patch User //////////////////////////////////////////

router.patch('/:userId/', patchUser)

/////////////////////////////// Patch specific todo of specific user ////////////////

router.patch('/:userId/todos/:todoId/', patchTodo)

/////////////////////////////// Delete User /////////////////////////////////////////

router.delete('/:userId/', deleteUser)

////////////////////////////// Delete specific todo of specific user ////////////////

router.delete('/:userId/todos/:todoId/', deleteTodo)

module.exports = router;