const express = require('express')

const app = express()
const port = 3001

app.use(express.json())

// Routes
const userRouter = require("./routes/users")
app.use(userRouter),



app.listen(port, () => {
    console.log("the app run successfuly")
})

