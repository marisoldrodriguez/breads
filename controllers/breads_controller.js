const express = require("express");
const breads = express.Router();
const bread = require("../models/bread");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: bread,
    title: "Index Page",
  });
  // res.send(Bread)
});

// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    });
  } else {
    res.render("404");
  }
});

// DELETE
breads.delete('/:indexArray', (req, res) => {
  bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads;
