var connect = require("connect");
var http = require("http");

var validateUser = function(request,response,next){
    console.log("Validating user");
    setTimeout(next(),5000);
}

var onRequest = function(request, response){
    console.log("User made a request ..." + request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("Hello! Welcome ..");
    response.end();

}

var createUser = function(request,response,next){
    console.log("creating new user for "+ request.url);
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("New user created.");
    response.end();
}

var app = connect();
app.use(validateUser);
//app.use(onRequest);
app.use("/newUser",createUser);

http.createServer(app).listen(3000);
console.log("Server started ...");

