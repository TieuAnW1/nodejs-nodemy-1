const express = require('express')
const app = express()
const port = 3000
const router1 = require('./route')

app.use('/api1', router1)

app.get('/', (req, res) => {
  res.send('Hello World! 123 45')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})