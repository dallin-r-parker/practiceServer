//============Dependencies

var express = require('express')
var bodyParser = require('body-parser')


//============intialization of server

var app = express(); // <-- turning on expresss

app.use(bodyParser.json())

var user = require('./user.js')



app.get('/getname', function(req, res){
    res.status(200).json(user.name);
})

app.put('/updatename', function(req, res) {
  user.name = req.body.name
  res.status(200).json(user.name);
})

app.post('/addcandy', function(req, res) {
    user.favoriteCandy.push(req.body.candy);
    res.status(200).json(user.favoriteCandy);
})



var port = 3030;
app.listen(port, function() {
    console.log("It's over: " + port);
})


// NOTE: Req = Request: coming from the browser is a Request
// NOTE: Res = Response: sending things back
// NOTE: PUT: UPDATE CONTENT
// NOTE: GET: REQUEST INFORMATION
// NOTE: POST: ADD NEW INFORMATION
// NOTE: D
