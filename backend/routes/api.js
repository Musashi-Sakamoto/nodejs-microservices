const router = require('express-promise-router')();

const postController = require('../controllers/postsController');

router.post('/posts', postController.create);

module.exports = router;