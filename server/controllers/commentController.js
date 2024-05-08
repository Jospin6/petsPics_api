const { Comment, User } = require("../models")

const create = async (req, res) => {
    const {post_id, content} = req.body
    const {id} = req.user
    await Comment.create({UserId: id, PostId: post_id, content})
    res.json("Added comment")
}

const show = async (req, res) => {
    const PostId = req.params.post_id
    const comments = await Comment.findAll({
        where: {
            PostId
        },
        include: [{model: User, as: 'User'}]
    })
    res.json(comments)
}

module.exports = {
    create,
    show
}