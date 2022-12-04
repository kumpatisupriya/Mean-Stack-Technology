var fs = require('fs'); 
  fs.readFile('sample.txt','utf8',function (err, data) 
                                             { 
                                                if (err) throw err;                         
                                                console.log(data); });
     console.log('Open a File to Reading');
