
const express = require('express')
var router1 = express.Router()

router1.get('/', (req, res) => {
    res.send('Router 1 test')
})

module.exports = router1