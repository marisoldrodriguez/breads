const express = require('express')
const breads = express.Router()
const bread = require('../models/bread')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: bread,
        title: 'Index Page'
      }
    )
  // res.send(Bread)
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
  })
  

module.exports = breads

