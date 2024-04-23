
const { User } = require("../models")
const bcryptjs = require("bcryptjs")
const { sign } = require("jsonwebtoken")

const getUsers = async (req, res) => {
    const getUsers = await User.findAll()
    const currentUser = req.user
    res.json({getUsers, currentUser})
}

const create = async (req, res) => {
    const {userName, password} = req.body
    bcryptjs.hash(password, 10).then(hash => {
        const user = User.create({
            userName: userName,
            password: hash
        })
        const accessToken = sign({userName: user.userName, id: user.id}, "authToken")
        res.json(accessToken)
    })
}

const login = async (req, res) => {
    const { userName, password, checked } = req.body
    const user = await User.findOne({ where: { userName: userName } })

    if(!user) res.json({ error: "User doesn't exist" })

    bcryptjs.compare(password, user.password)
    .then(match => {
        if(!match) res.json({ error: "Wrong password" })
        const accessToken = sign({userName: user.userName, id: user.id}, "authToken")
        res.json(accessToken)
    })
} 


module.exports = {
    getUsers,
    create,
    login
}