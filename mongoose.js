const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () => {
  const MONGODB_URL = String(process.env.MONGODB_URL)
  const connection = await mongoose.connect(MONGODB_URL)

  return connection
}

module.exports = connect()
