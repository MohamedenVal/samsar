var express = require("express");
var app = express();
app.use(express.static(__dirname + '/app'));
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"app/index.html"));
});
app.listen(1337, function(){
    console.log("Server is listening on port 1337");
});