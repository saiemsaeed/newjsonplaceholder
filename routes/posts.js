const express = require('express'),
    router = express.Router();
var getAllPosts = require('../controller/post/getAllPosts')
var addPost = require('../controller/post/addPost')
var deletePost = require('../controller/post/deletePost')
var putPost = require('../controller/post/putPost')
var patchPost = require('../controller/post/patchPost')
var getPost = require('../controller/post/getPost')

////////////////////////////// Get All Posts  ////////////////////////////////////////

router.get('/', getAllPosts)

// /////////////////////////// Get specific post /////////////////////////////////////

router.get('/:postId', getPost)

// /////////////////////////////// Post a Post //////////////////////////////////////////

router.post('/', addPost)

// /////////////////////////////// Put Post ////////////////////////////////////////////

router.put('/:postId/', putPost)

// /////////////////////////////// Patch post //////////////////////////////////////////

router.patch('/:postId', patchPost)

// /////////////////////////////// Delete Post /////////////////////////////////////////

router.delete('/:postId', deletePost)


module.exports = router;