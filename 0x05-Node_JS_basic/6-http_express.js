/* Install Express and create a small HTTP server using Express module:
    It should be assigned to the variable app and this one must be exported
    HTTP server should listen on port 1245
    Displays Hello Holberton School! in the page body for the endpoint /
 */

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
