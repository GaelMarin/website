const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.listen(80, () => console.log('Webserver running on port 80.'))
