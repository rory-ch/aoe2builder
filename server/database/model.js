const { Building, Build, User, GatherRates } = require('./schema.js');

// GET /buildings
module.exports.getBuildings = (callback) => {
  Building.find((err, results) => {
    if (err) callback(err);
    else callback(null, results);
  });
};

// GET /gatherRates
module.exports.getGatherRates = (callback) => {
  GatherRates.find((err, results) => {
    if (err) callback(err);
    else callback(null, results);
  });
};

// POST /builds
module.exports.postBuild = (data, userId, callback) => {
  const newBuild = new Build(data);
  User.findByIdAndUpdate(userId, { $push: { builds: newBuild } }, (err, result) => {
    if (err) callback(err);
    else callback(null, result);
  });
};
