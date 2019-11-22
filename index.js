const bodyParser = require('body-parser')
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fetch = require('node-fetch')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/index', (req, res) => {
  res.render('index')
})

require('./routes/film')(app, fetch)
require('./routes/camera')(app, fetch)
require('./routes/login')(app, fetch)


app.get('/comment', (req, res) => {
  res.render('comment')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.use(function(req, res) {
  res.status(404)
  res.render('404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
