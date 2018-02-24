
var express = require('express');

var app = express();


var server = app.listen(process.env.PORT || 3000, listen);


function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(' app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));



var io = require('socket.io')(server);


io.sockets.on('connection',
 
  function (socket) {
  
    console.log("We have a new client: " + socket.id);
  
    socket.on('msg',

    	function(data){

         console.log('we have a new message from'+data.user+":"+data.message)
         socket.brodcast.emit('m',data)

    	})
    
  }
);