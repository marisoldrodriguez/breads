// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
// const bread = require('../models/bread.js')  //i added to debug can't populate breads???

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
})

// Index virtual
baker.get('/', (req, res) => {
    Baker.find()
    .populate('bread')
    .then(foundBakers => {
        res.send(foundBakers)
    })
})

// Show
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

// export
module.exports = baker                    
