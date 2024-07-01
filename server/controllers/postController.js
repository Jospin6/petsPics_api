const { Post, Like, Image } = require("../models")

const index = async (req, res) => {
    const posts = await Post.findAll({ include: [{ model: Like, as: 'likes' }, { model: Image, as: 'image' }] })
    res.json(posts)
}

const create = async (req, res) => {
    const { pet_id, content } = req.body
    const { id } = req.user
    const { filename } = req.file
    if (!req.file) {
        res.json({ error: "No image sended!" })
    } else {
        const post = await Post.create({ user_id: id, pet_id, content })
        Image.create({ url: filename, PostId: post.id })
        res.json("Created post!")
    }
}

const show = async (req, res) => {
    const id = req.params.id
    const post = await Post.findOne({
        where: { id },
        include: [{ model: Like, as: 'likes' }, { model: Image, as: 'image' }]
    })
    res.json(post)
}

const usersPosts = async (req, res) => {
    const { id } = req.user
    const posts = await Post.findAll({
        where: { user_id: id },
        include: [{ model: Like, as: 'likes' }, { model: Image, as: 'image' }]
    })
    res.json(posts)
}

const update = async (req, res) => {
    const { post_id } = req.params
    const { pet_id, content } = req.body
    const { filename } = req.file
    const post = await Post.findByPk(post_id)
    if (!post) {
        return res.status(404).json({ error: "No founded post with this post id" })
    } else {
        await post.update({ pet_id, content })
        if (req.file) {
            const findImage = Image.find({
                where: { PostId: post.id }
            })
            findImage.update({ url: filename })
        }
        res.json("Updated post!")
    }
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