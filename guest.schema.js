const mongoose = require("mongoose")
const guestSchema = new mongoose.Schema({
  name: String,
  text: String,
})

const Guest = mongoose.model("Guest", guestSchema)

module.exports = Guest
