const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()
const app = express()
const port = 3000
// static file
app.use(express.static('./public'))
// parse json data
app.use(express.json()) // always use this before the route middleware

//routes
app.use('/api/v1/tasks', tasks)

// for 404 errors
app.use(notFound)
app.use(errorHandlerMiddleware)

// connecting to the database and also listening to the server
const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()

