// server.js

const http = require('http');
const next = require('next');
const socketIO = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Your custom server logic here
    handle(req, res);
  });

  // Integrate Socket.IO with the server
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('menuOrder', (order) => {
      console.log('Received menu order:', order);
      // Broadcast the order to all connected clients
      io.emit('newMenuOrder', order);
    });

    socket.on('disconnect', () => {
      console.log('A client disconnected');
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
