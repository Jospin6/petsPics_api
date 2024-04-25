const { Pet } = require("../models")

const create = async (req, res) => {
    Pet.create(req.body)
    res.json("PET CREATED !")
}


module.exports = {
    create,
}