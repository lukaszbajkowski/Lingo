const express = require('express');
const router = express.Router();

const postActions =  require('../actions/api/posts');

router.get('/', postActions.savePost);

module.exports = router;