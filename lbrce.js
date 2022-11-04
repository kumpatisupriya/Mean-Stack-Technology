var express=require('express')
var app=express()
app.get('/lbrce507.examly.io/',function(req,res){
res.send("This is a neopat.js")
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
  

   console.log("Example app listening at http://%s:%s", host, port)
})