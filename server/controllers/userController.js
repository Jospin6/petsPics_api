
const { User } = require("../models")
const bcryptjs = require("bcryptjs")

const getUsers = async (req, res) => {
    const getusers = await User.findAll()
    res.json(getusers)
}

const create = async (req, res) => {
    const {userName, password} = req.body
    bcryptjs.hash(password, 10).then(hash => {
        User.create({
            userName: userName,
            password: hash
        })
    })
    res.json("SUCCESS")
}

const login = async (req, res) => {
    const { userName, password, checked } = req.body
    const user = await User.findOne({ where: { userName: userName } })

    if(!user) res.json({ error: "User doesn't exist" })

    bcryptjs.compare(password, user.password)
    .then(match => {
        if(!match) res.json({ error: "Wrong password" })
        res.json("LOGGED SUCCESS !!!")
    })
} 


module.exports = {
    getUsers,
    create,
    login
}