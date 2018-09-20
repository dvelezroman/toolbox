const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static(path.resolve(`${__dirname}/../browser/public`)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use('/api', routes);

app.use('/', function (req, res, next) {
  const indexFilePath = path.resolve(`${__dirname}/../browser/index.html`)
  res.sendFile(indexFilePath)
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err);
});

app.listen(3000, () => console.log('Listening on PORT 3000'));

module.exports = app;