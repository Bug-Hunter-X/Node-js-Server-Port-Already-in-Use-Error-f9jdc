const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    console.error(error);
  }
};

const onListening = () => {
  console.log(`Server is listening on port ${port}`);
};

server.on('error', onError);

server.listen(port, onListening); 
