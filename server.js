var http = require("http");

var onRequest = function(request, response){
    console.log("User made a request ..." + request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("Hello! Welcome ..");
    response.end();

}

http.createServer(onRequest).listen(3000);
console.log("Server started ...");

