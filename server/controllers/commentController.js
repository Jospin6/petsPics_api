const { Comment } = require("../models")

const create = async (req, res) => {
    const {post_id, content} = req.body
    const {id} = req.user
    await Comment.create({user_id: id, post_id, content})
    res.json("Added comment")
}

const show = async (req, res) => {
    const post_id = req.params.post_id
    const comments = await Comment.findAll({
        where: {
            post_id
        }
    })
    res.json(comments)
}

module.exports = {
    create,
    show
}