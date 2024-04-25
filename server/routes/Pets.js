const express = require("express")
const router = new express.Router()
const { 
    create,
    index
} = require("../controllers/petController")

router.get("/pets", index)
router.post("/pets", create)



module.exports = router