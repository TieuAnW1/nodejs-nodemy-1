
const express = require('express')
var router1 = express.Router()

router1.get('/', (req, res) => {
    res.send('Router 1 test ' + req.body.name + ' '+ req.headers.age)
})

module.exports = router1