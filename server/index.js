const express = require('express')
const cors = require("cors")

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())

// Routes
const userRouter = require("./routes/Users")
app.use(userRouter)
const petRouter = require("./routes/Pets")
app.use(petRouter)
const postRouter = require("./routes/Posts")
app.use(postRouter)
const commentRouter = require("./routes/Comments")
app.use(commentRouter)



app.listen(port, () => {
    console.log("the app run successfuly")
})

