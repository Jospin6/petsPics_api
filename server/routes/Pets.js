const express = require("express")
const router = new express.Router()
const { 
    create,
} = require("../controllers/petController")

router.post("/pets", create)


module.exports = router