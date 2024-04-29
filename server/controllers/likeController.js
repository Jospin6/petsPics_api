const { Like } = require("../models")

const create = async (req, res) => {
    const { post_id } = req.body
    const { id } = req.user

    const found = await Like.findOne({
        where: {
            user_id: id,
            post_id
        }
    })
    if (!found) {
        await Like.create({ post_id, user_id: id })
        res.json("Liked the post !")
    } else {
        await Like.destroy({
            where: {
                user_id: id,
                post_id
            }
        })
        res.json("Unliked the post !")
    }
}

const getUserLikes = async (req, res) => {
    
}

module.exports = {
    create
}