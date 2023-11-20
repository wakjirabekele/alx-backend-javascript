/* Create a small HTTP server using the http module:
  It should be assigned to the variable app and this one must be exported
  HTTP server should listen on port 1245
  Shows Hello Holberton School! in the page body for any endpoint as plain text
 */

const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
