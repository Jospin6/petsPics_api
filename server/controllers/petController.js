const { Pet } = require("../models")

const index = async (req, res) => {
    const pets = await Pet.findAll()
    res.json(pets)
}

const create = async (req, res) => {
    Pet.create(req.body)
    res.json("PET CREATED !")
}


module.exports = {
    create,
    index
}