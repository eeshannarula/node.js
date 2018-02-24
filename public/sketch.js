
var socket;
var msgBar;
function setup() {
  //createCanvas(400, 400);
  //background(0);
  msgBar=document.getElementById('msgBar')
  socket = io.connect('http://localhost:3000');
  socket.on('m',got)
  
}
function got(data){
	console.log("new msg from"+data.user+":"+data.message)
	var div=document.createElement('div')
	var txt=document.createTextNode(data.message)
	div.append(txt)
	document.body.append(div)
}
function draw() {
  
}

function send()
{
	var msg=msgBar.value
	var data={
		user:socket.id,
		message:msg,
	}
	console.log(socket.id+":"+msg)

	socket.emit('msg',data)
	var div=document.createElement('div')
	var txt=document.createTextNode(data.message)
	div.append(txt)
	document.body.append(div)
	msgBar.value='';
}


