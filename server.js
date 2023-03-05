const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const usersRoutes = require('./src/routes/users-routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(usersRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app