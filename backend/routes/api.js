const router = require('express-promise-router')();

const postController = require('../controllers/postController');

router.post('/posts', postController.create);

module.exports = router;
