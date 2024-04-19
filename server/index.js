const express = require('express')
const cors = require("cors")

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())

// Routes
const userRouter = require("./routes/users")
app.use(userRouter),



app.listen(port, () => {
    console.log("the app run successfuly")
})

