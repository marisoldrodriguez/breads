// require mongoose
const mongoose = require("mongoose");
const baker = require("../controllers/bakers_controllers");
const { Schema } = mongoose;
const Bread = require("./bread");

// Schema
const bakerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
    },
    startDate: {
      type: Date,
      required: true,
    },
    bio: String,
  },
  { toJSON: { virtuals: true } }
);

// VIRTUAL SCHEMA
bakerSchema.virtual("breads", {
  ref: "Bread",
  localField: "_id",
  foreignField: "baker",
});

// // Hooks
// bakerSchema.post('findOneAndDelete', function () {
//     console.log(this)
// })

// model and export
const Baker = mongoose.model("Baker", bakerSchema);
module.exports = Baker;
