const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const url = 'mongodb+srv://ajay123456:ajay@123@cluster0.8qyzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const ForumRoute = require('./routes/forum')
const categoryRoute = require('./routes/category')
const ReplyRoute = require('./routes/reply')
const AuthRoute = require('./routes/auth')


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!')
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//const PORT  = process.env.PORT || 27012
const PORT = 8080
app.listen(PORT, () => {
    console.log('Server is Running on Port : ' + PORT)
})
app.use('/api/forum', ForumRoute)
app.use('/api/reply', ReplyRoute)
app.use('/api/category', categoryRoute)
app.use('/api', AuthRoute)

