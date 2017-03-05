var express = require('express');
var app = express();
app.use('/vendor',express.static(__dirname + '/vendor'));
app.use('/public',express.static(__dirname + '/public'));
app.use('/assets',express.static(__dirname + "/assets"));
app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.listen(8080);