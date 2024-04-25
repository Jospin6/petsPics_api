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



app.listen(port, () => {
    console.log("the app run successfuly")
})

