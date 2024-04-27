const express = require("express")
const router = new express.Router()
const {validateToken} = require("../middlewares/authMiddleware")
const {
    create,
    show
} = require("../controllers/commentController")

router.get("/comments/:post_id", show)
router.post("/comments", validateToken, create)

module.exports = router