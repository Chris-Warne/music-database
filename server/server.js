const path = require('path')
const express = require('express')
const songlistRoutes = require('./routes/songlist')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('api/v1/songlist', songlistRoutes)


// BROWSER ROUTER CONFIG
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
