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
// show 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 2 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})


// DELETE
baker.delete("/:id", (req, res) => {
    Baker.findByIdAndDelete(req.params.id).then((deletedBread) => {
      res.status(303).redirect("/breads");
      console.log(deletedBread);
    });
  });

// export
module.exports = baker                    
