const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllBuildings, getBuilding, getBuildingUnits, getBuildingTechs, getUnit, getGatherRates, postBuild } = require('./db.model.js');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser());
app.use(cors());


// GET /buildings
app.get('/buildings', (req, res) => {
  console.log('GET /buildings');
  getAllBuildings((err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  });
});

// GET /buildings/:buildingId
app.get('/buildings/:buildingId', (req, res) => {
  console.log(`GET /buildings/${req.params.buildingId}`);
  getBuilding(req.params.buildingId, (err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  });
});

// GET /buildings/:buildingId/units
app.get('/buildings/:buildingId/units', (req, res) => {
  console.log(`GET /buildings/${req.params.buildingId}/units`);
  getBuildingUnits(req.params.buildingId, (err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  });
});

// GET /buildings/:buildingId/techs
app.get('/buildings/:buildingId/techs', (req, res) => {
  console.log(`GET /buildings/${req.params.buildingId}/techs`);
  getBuildingTechs(req.params.buildingId, (err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send();
    } else {
      res.status(200).send(results);
    }
  });
});

// GET /units/:unitId
app.get('/units/:unitId', (req, res) => {
  console.log(`GET /units/${req.params.unitId}`);
  getUnit(req.params.unitId, (err, results) => {
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
  console.log('GET /gatherRates');
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
