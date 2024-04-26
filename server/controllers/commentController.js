const { Comment } = require("../models")

const create = async (req, res) => {
    const {post_id, content} = req.body
    const {id} = req.user
    await Comment.create({user_id: id, post_id, content})
    res.json("Added comment")
}

module.exports = {
    create
}