const express = require('express')
const compression = require('compression')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(compression())

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.listen(80, () => console.log('Webserver running on port 80.'))
