const session = require('express-session');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connect');
const Sequelizestore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const hostname = `localhost`;
const port = 3000;

const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
}
);

server.listen(port, hostname, () =>{
  console.log(`server running at http://${hostname}:${port}/`);

}
);


