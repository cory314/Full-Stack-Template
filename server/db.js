const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/glossary")
  .then(() => console.log("connected to database"));

let mySchema = mongoose.Schema({
  //schema here
});

let database = mongoose.model("NAMEOFDATABSE", mySchema);