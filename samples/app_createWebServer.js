var http = require('http');
http.createServer(function(req, res){
    //send the http header 
    //HTTP status 200:ok
    //content Type is text/plain
   var body ='This is web server connection process';
   var content_length = body.Length; 
   res.writeHead(200, 
   {'Content-Type':'text/plain',
    'Content-Length':content_length
   }
   ); 
   //send the response body
   res.end(body);
}).listen(3000);
//Console will print the message
console.log('server running on localhost 3000');