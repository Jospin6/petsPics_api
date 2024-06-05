const { Pet, Image } = require("../models")

const index = async (req, res) => {
    const pets = await Pet.findAll()
    res.json(pets)
}

const create = async (req, res) => {
    const { id } = req.user
    const {petName, species, breed, age, image} = req.body
    const pat = Pet.create({petName, species, breed, age, user_id: id})

    res.json("PET CREATED !")
}

const show = async (req, res) => {
    const id = req.params.id
    const pet = await Pet.findOne({
        where: { id }
    })
    res.json(pet)
}

const userPets = async (req, res) => {
    const { id } = req.user
    const pets = await Pet.findAll({
        where: {
            user_id: id
        }
    })
    res.json(pets)
}

const update = async (req, res) => {
    
}


module.exports = {
    create,
    index,
    update,
    show,
    userPets
}