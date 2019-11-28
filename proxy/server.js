var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.post('/api/task/startflow', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var newCustomer = req.body;
    // customers["customer" + newCustomer.id] = newCustomer;
    console.log("--->After Post, customers:\n" + JSON.stringify(newCustomer, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newCustomer, null, 4));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})