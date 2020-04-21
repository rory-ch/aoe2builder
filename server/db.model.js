/* eslint-disable no-shadow */
const { db } = require('./db.js');

db.connect((err) => {
  if (err) console.error(err);
  else console.log('Succesfully connected to database');
});

// GET /buildings
module.exports.getAllBuildings = (callback) => {
  const query = 'SELECT * FROM buildings;';
  db.query(query, (err, { rows }) => {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// GET /buildings/:buildingId
module.exports.getBuilding = (buildingId, callback) => {
  const query = 'SELECT * FROM buildings WHERE buildingid = $1;';
  db.query(query, [buildingId], (err, { rows }) => {
    if (err) callback(err);
    const result = rows[0];
    const query = 'SELECT * FROM buildings FULL JOIN units ON buildings.buildingid = units.building WHERE buildings.buildingid = $1;';
    db.query(query, [buildingId], (err, { rows }) => {
      if (err) callback(err);
      result.units = rows;
      const query = 'SELECT * FROM buildings FULL JOIN techs ON buildings.buildingid = techs.building WHERE buildings.buildingid = $1;';
      db.query(query, [buildingId], (err, { rows }) => {
        if (err) {
          callback(err);
        } else {
          result.techs = rows;
          callback(null, result);
        }
      });
    });
  });
};

// GET /buildings/:buildingId/units
module.exports.getBuildingUnits = (buildingId, callback) => {
  const query = 'SELECT * FROM buildings FULL JOIN units ON buildings.buildingid = units.building WHERE buildings.buildingid = $1;';
  db.query(query, [buildingId], (err, { rows }) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// GET /buildings/:buildingId/techs
module.exports.getBuildingTechs = (techId, callback) => {
  const query = 'SELECT * FROM buildings FULL JOIN techs ON buildings.buildingid = techs.building WHERE buildings.buildingid = $1;';
  db.query(query, [techId], (err, { rows }) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

module.exports.getUnit = (unitId, callback) => {
  const query = 'SELECT * FROM units WHERE unitid = $1;';
  db.query(query, [unitId], (err, { rows }) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// GET /gatherrates
module.exports.getGatherRates = (callback) => {
  const query = 'SELECT * FROM gatherrates';
  db.query(query, (err, { rows }) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// POST /build/:userId
module.exports.postBuild = (callback) => {
  const query = '';
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, result);
    }
  });
};
