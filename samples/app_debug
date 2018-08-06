var http = require('http');
http.createServer(function(req, res){
   var body ='This is web server connection process';
   var content_length = body.Length; 
   res.writeHead(200, 
   {'Content-Type':'text/plain',
    'Content-Length':content_length
   }
   ); 
   res.end(body);
}).listen(3000);
console.log('server running on localhost 3000');