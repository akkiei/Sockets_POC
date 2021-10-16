const http = require("http");

const websocket = require("ws");

const server = http.createServer((req, res) => {
  res.end(" it is running");
});

const wss = new websocket.Server({ server });
wss.on("headers", (message) => {
  console.log(message);
});

wss.on("connection", (ws, req) => {
  console.log(req);
  ws.send("welcome to WEB SOCKET!");
});

server.listen(8000);
