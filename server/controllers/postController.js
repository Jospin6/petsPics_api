const { Post, Like } = require("../models")

const index = async (req, res) => {
    const posts = await Post.findAll({ include: [{ model: Like, as: 'likes'}] })
    res.json(posts)
}

const create = async (req, res) => {
    const { pet_id, content } = req.body
    const { id } = req.user
    await Post.create({user_id: id, pet_id, content})
    res.json("Created post!")
}

const show = async (req, res) => {
    const id = req.params.id
    const post = await Post.findOne({
        where: { id },
        include: [{ model: Like, as: 'likes'}]
    })
    res.json(post)
}

const usersPosts = async (req, res) => {
    const { id } = req.user
    const posts = await Post.findAll({
        where: { UserId: id },
        include: [{ model: Like, as: 'likes'}] 
    })
    res.json(posts)
}

const update = async (req, res) => {

}

const remove = async (req, res) => {

}

module.exports = {
    index,
    create,
    show,
    update,
    remove,
    usersPosts
}