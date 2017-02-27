var express = require('express');  
var app = express();  
var server = require('http').Server(app);  

var messages = [{  
  id: 1,
  text: "Primer mensaje del servidor",
  author: "Servidor"
},{  
  id: 1,
  text: "Coslada es como un mundo paralelo, con policías mafiosos...",
  author: "Germán"
},{  
  id: 1,
  text: "Sacado del blog del autor",
  author: "Carlos Azaustre"
}];

app.use(express.static('public'));

app.get('/hello', function(req, res) {  
  res.status(200).send("Hello World!");
});