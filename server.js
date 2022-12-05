const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const router1 = require('./route')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api1', router1) 

app.get('/', (req, res) => {
  res.send('Hello World! 123 45')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})