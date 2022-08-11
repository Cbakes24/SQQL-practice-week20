const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.data_source,
    sqlite3.OPEN_READWRITE
);

// Process environment variables
require('dotenv').config();

// Instantiate database here
// ...

// Express using json
app.use(express.json());

// Routes will go here
// ...

// Set port and listen for incoming requests
const port = 5000;
app.listen(5000, () => console.log('Server is listening on port', port));
