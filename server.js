// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('sqlite');
const Promise = require('bluebird');
const cors = require('cors')

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// CORS
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// Promise.resolve()
//   .then(() => db.open('./database.db', { Promise }))
//   .then(() => db.migrate({ force: 'last'}))
//   .catch((err) => console.error(err.stack))
//   .finally(() => server.listen(port, () => console.log(`API running on localhost:${port}`)));

server.listen(port, () => console.log(`API running on localhost:${port}`))

// server.listen(port, () => console.log(`API running on localhost:${port}`));