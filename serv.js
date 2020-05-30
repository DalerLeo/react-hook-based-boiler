const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.listen(3000)
