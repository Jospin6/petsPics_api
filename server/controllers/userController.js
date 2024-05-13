
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

const show = async (req, res) => {
    const id = req.params.id
    const user = await User.findOne({
        where: { id }
    })
    res.json(user)
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

const update = async (req, res) => {
    const { id } = req.user
    const { userName } = req.body
    const user = await User.findByPk(id)
    if (!user) {
        res.json("WTF!!!")
    }
    user.userName = userName;
    await user.save();

    res.json({ message: 'Profile updated', user });
}

const currentUser = (req, res) => {
    res.json(req.user)
}


module.exports = {
    getUsers,
    create,
    show,
    login,
    currentUser,
    update
}