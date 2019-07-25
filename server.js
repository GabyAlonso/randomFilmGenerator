const express = require('express');
const Titles = require('./Titles.js');
var cors = require('cors');

var app = express();
const port = 3000;

app.use(cors());

app.get('/api/titles', (req, res) => {
  Titles.getSome().then((titles) => {
    res.send(titles);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/api/titles/:id', (req, res) => {
    Titles.getRandomTitle(req.params.id).then((title) => {
      res.send(title);
    }, (e) => {
      res.status(400).send(e);
    });
  });

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};