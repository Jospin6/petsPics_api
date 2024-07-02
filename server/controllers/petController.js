const { Pet } = require("../models")

const index = async (req, res) => {
    const pets = await Pet.findAll()
    res.json(pets)
}

const create =async (req, res) => {
    const { id } = req.user
    const {petName, species, breed, age} = req.body
    const { filename } = req.file
    if (!req.file) {
        res.json({error: "No image sended!"})
    } else {
        Pet.create({petName, species, breed, age, user_id: id, image: filename})
        res.json("PET CREATED !")
    }
    
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
    const {id} = req.params
    const pet = await Pet.findOne({
        where: { id }
    })
    const {petName, species, breed, age} = req.body
    const { filename } = req.file
    if (!pet) {
        return res.status(404).json({ error: "No founded pet with this pet id" })
    } else {
        if (!req.file) {
            await pet.update({petName, species, breed, age})
        } else {
            await Pet.update({petName, species, breed, age, user_id: id, image: filename})
        }
    }
    res.json("PET UPDATED !")
}

const remove = async (req, res) => {
    const { id } = req.params
    const pet = await Pet.findByPk(id)
    if (!pet) {
        return res.status(404).json({ error: "No founded pet with this pet id" })
    }
    await pet.destroy()
    res.json("Pet deleted successfully")
}


module.exports = {
    create,
    index,
    update,
    show,
    userPets,
    remove
}