const Post = require('../models/post.model.js');


const updatePost = async (req, next) => {
    const id = req.params.id;
    const ubody = req.body;

    try {
        const updatedPost = await Post.findOneAndUpdate(
            { _id: id },
            ubody,
            { new: true, useFindAndModify: false }
        );

        next(null, updatedPost);
    } catch (error) {
        next(error);
    }
}


const findPost = async (req, next) => {
    try {
        const post = await Post.findById(req.id);
        next(null, post);
    } catch (error) {
        next(error);
    }
}

const getAllPosts = async (req, next) => {
    try {
        const posts = await Post.find();
        next(null, posts)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findPost, updatePost, getAllPosts
};