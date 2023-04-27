/* 
Requisitos para desplegar:
* puerto(port) asignado en las variables globales
* comando "start":"node app.js" en el package.json:
*/

require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const port = process.env.PORT

const app = express()

// ? hbs
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials")

// ? static content
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/generic', (req, res) => {
    res.render("generic")
})

app.get('/elements', (req, res) => {
    res.render("elements")
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
