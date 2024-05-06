const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const { 
    create,
    index,
    show
} = require("../controllers/petController")

router.get("/pets", index)
router.post("/pets", validateToken, create)
router.get("/pets/:id", show)



module.exports = router