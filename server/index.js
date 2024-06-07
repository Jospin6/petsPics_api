const express = require('express')
const cors = require("cors")
const path = require("path")

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())

app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
const userRouter = require("./routes/Users")
app.use(userRouter)
const petRouter = require("./routes/Pets")
app.use(petRouter)
const postRouter = require("./routes/Posts")
app.use(postRouter)
const commentRouter = require("./routes/Comments")
app.use(commentRouter)
const likeRouter = require("./routes/Likes")
app.use(likeRouter)




app.listen(port, () => {
    console.log("the app run successfuly")
})

