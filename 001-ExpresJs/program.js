var express = require('express');

var app = express();
app.route('/Route1').get(function(req,res)
{
    res.send("This is route 1");
});
app.route('/Route2').get(function(req,res)
{
    res.send("This is route 2");
});
app.get('/',function(req,res){
    res.send('This is root');
});

var server=app.listen(8080,function() {});