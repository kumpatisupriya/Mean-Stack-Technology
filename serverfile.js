var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) 
    {
  //Open a file on the server and return its content:
    fs.readFile('sample.txt', function(err, data)
                        {
                         res.writeHead(200, {'Content-Type':   'text/html'});
	          res.write("<body bgcolor='red'>");
                         res.write("<h1>"+data+"</h1>");
                        return res.end();
                    });
 }).listen(3030);
