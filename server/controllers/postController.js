const { Post } = require("../models")

const create = async (req, res) => {
    const { pet_id, content } = req.body
    const { id } = req.user
    await Post.create({user_id: id, pet_id, content})
    res.json("Created post!")
}

const show = async (req, res) => {
    const id = req.params.id
    const post = await Post.findOne({
        where: { id }
    })
    res.json(post)
}

module.exports = {
    create,
    show
}