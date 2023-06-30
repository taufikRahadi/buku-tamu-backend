const express = require("express")
const app = express()
const http = require("http")
const mongoConnection = require("./mongoose")
const Guest = require("./guest.schema")
require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("", (req, res, next) => {
  res.send("This is API is running")
})
// POST CREATE GUEST BOOK DATA
app.post("/guest", async (req, res, next) => {
  const { name, text } = req.body

  const guest = await new Guest({ name: name, text: text }).save()
  console.log("Guest created: ", guest.name)

  res.json({ status: true }).status(201)
})
const server = http.createServer(app)

const port = Number(process.env.PORT)
server.listen(port, () => {
  mongoConnection
    .then(() => {
      console.log(`App is running on port ${port} and connected to database`)
    })
    .catch((err) => {
      console.log("Error connecting to database")
      server.close()
    })
})

module.exports = server
