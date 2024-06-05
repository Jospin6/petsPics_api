const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const {upload} = require('../middlewares/uploadImgMiddleware')
const { 
    create,
    index,
    show,
    userPets
} = require("../controllers/petController")

router.get("/pets", index)
router.post("/pets", validateToken, upload.single('image'), create)
router.get("/pets/:id", show)
router.get("/userPet", validateToken, userPets)



module.exports = router