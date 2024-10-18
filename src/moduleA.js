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


module.exports = {
    updatePost
};