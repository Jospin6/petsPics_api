const multer = require('multer')

const storage = multer.diskStorage({
    destination: (_req, _file, cb) =>{
        cb(null, "./public/images/")
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })
module.exports = {upload}