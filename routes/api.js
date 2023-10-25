const express = require('express');
const router = express.Router();

const postActions = require('../actions/api/postActions');

router.get('/posts', postActions.getPosts);

router.get('/posts/:id', postActions.getPost);

router.post('/posts', postActions.savePost);

router.put('/posts/:id', postActions.updatePost);

router.delete('/posts/:id', postActions.deletePost);

module.exports = router;
