var express = require("express");
var app = express();
const cors = require('cors')

//Implementation of CORS
app.use(cors());
app.options('*', cors())

require('dotenv/config');

app.use(express.static(__dirname + '/app'));
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"app/index.html"));
});

port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log(`Server is listening on port ${port}`);
});