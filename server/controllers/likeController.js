const { Like } = require("../models")

const create = async (req, res) => {
    const { PostId } = req.body
    const { id } = req.user

    const found = await Like.findOne({
        where: {
            PostId,
            UserId: id
        }
    })
    if (!found) {
        await Like.create({ PostId, UserId: id })
        res.json("Liked the post !")
    } else {
        await Like.destroy({
            where: {
                PostId,
                UserId: id,
            }
        })
        res.json("Unliked the post !")
    }
}

const getUserLikes = async (req, res) => {
    const { id } = req.user
    const likes = await Like.findAll({
        where: {UserId: id}
    })
    res.json(likes)
}

module.exports = {
    create,
    getUserLikes
}