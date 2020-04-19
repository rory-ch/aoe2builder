const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getBuildings, getGatherRates, postBuild } = require('./database/model.js');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser());

// GET /buildings
app.get('/buildings', (req, res) => {
  getBuildings((err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  });
});

// GET /gatherRates
app.get('/gatherRates', (req, res) => {
  getGatherRates((err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  });
});

// GET /builds
app.post('/builds/:userId', (req, res) => {
  const { userId } = req.params;
  const { data } = req.data;
  postBuild(data, userId, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Failed to start server:\n${err}`);
  } else {
    console.log(`Listening on ${port}`);
  }
});
