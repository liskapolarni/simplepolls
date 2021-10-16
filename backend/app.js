const dotenv = require('dotenv').config()

const express = require('express')
const cors = require('cors')

const manageRoutes = require('./routes/manageRoutes')
const voteRoutes = require('./routes/voteRoutes')
const resultsRoutes = require('./routes/resultsRoutes')

const fs = require('fs')
const db = require('./db')

const initSql = fs.readFileSync('./db/init.sql').toString()

db.run(initSql, [], err => {
    if (err) {
        console.log(err)
    }
})

const app = express()

app.use(cors())
app.use(express.json())

app.use('/manage', manageRoutes)
app.use('/vote', voteRoutes)
app.use('/results', resultsRoutes)

app.use('*', (req, res) => {
    res.status(404)
})

app.listen(process.env.PORT)