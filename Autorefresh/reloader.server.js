var WebSocket = require('ws'); //npm install ws OR npm install ws -g
 
const wss = new WebSocket.Server({ port: 8080 });

let webSocketConnection;
wss.on('connection', function connection(ws) 
{
  webSocketConnection = ws;
});

let fs = require('fs');
fs.watch('index.html', (eventType, filename) => {
  if (filename) {
    console.log(filename);
    webSocketConnection.send("reload");
  }
});