const Post = require('../models').post;

const create = async (req, res, next) => {
    const {
      title
    } = req.body;
  
    let post;
    try {
      post = await Post.create({
        title
      });
    }
    catch (error) {
      return next(new createError.InternalServerError('DB Error'));
    }
    return res.status(201).json({
      post
    });
  };

  module.exports = {
    create
  }