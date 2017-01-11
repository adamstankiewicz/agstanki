const express = require('express');
const path = require('path');

const app = express();
const port = (process.env.PORT || 8080);

const publicPath = express.static(path.join(__dirname));

app.use('/', publicPath);

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
