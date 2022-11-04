var express = require('express')
var app = express()
app.get('/', function (req, res) {
   res.send('This is a Sample Example for Express.js .')
})
app.get('/welcome/', function (req, res) {
   res.send('Welcome to node express.js.')
})
app.get('/hello/', function (req, res) {
   res.send('hello page.')
})
app.get('/bye/', function (req, res) {
   res.send('bye page.')
})
app.get('/thank/', function (req, res) {
   res.send('Thank you page.')
})
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})
