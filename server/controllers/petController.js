const { Pet } = require("../models")

const index = async (req, res) => {
    const pets = await Pet.findAll()
    res.json(pets)
}

const create = async (req, res) => {
    Pet.create(req.body)
    res.json("PET CREATED !")
}

const update = async (req, res) => {
    
}


module.exports = {
    create,
    index,
    update
}