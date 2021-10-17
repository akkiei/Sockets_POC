const http = require("http");
const socket = require("socket.io");

const server = http.createServer((req, res) => {
  res.end("connected to server");
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket, msg) => {
  console.log(socket);
  console.log(msg);
  socket.emit("message", "msg from socket !");

  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
