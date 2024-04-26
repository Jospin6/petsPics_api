const { Like } = require("../models")

const create = async (req, res) => {
    const { post_id } = req.body
    const { id } = req.user

    const found = await Like.findOne({
        where: {
            post_id,
            user_id: id
        }
    })
    if (!found) {
        await Like.create({ post_id, user_id: id })
        res.json("Liked the post !")
    } else {
        await Like.destroy({
            where: {
                post_id,
                user_id: id
            }
        })
        res.json("Unliked the post !")
    }
}

module.exports = {
    create
}