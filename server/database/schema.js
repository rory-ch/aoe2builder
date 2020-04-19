const { Schema } = require('mongoose');
const { db } = require('./connection.js');

const CostSubDoc = new Schema({
  wood: Number,
  food: Number,
  gold: Number,
  Stone: Number,
});

const TechSubDoc = new Schema({
  name: { type: String, unique: true, required: true },
  cost: CostSubDoc,
  researchTime: { type: Number, required: true },
});

const UnitSubDoc = new Schema({
  name: { type: String, unique: true, required: true },
  cost: CostSubDoc,
  buildTime: { type: Number, required: true },
});

const BuildingSchema = new Schema({
  name: { type: String, unique: true, required: true },
  cost: CostSubDoc,
  buildTime: { type: Number, required: true },
  techs: [TechSubDoc],
  units: [UnitSubDoc],
});

const GatherRatesSchema = new Schema({
  hunt: Number,
  berries: Number,
  sheep: Number,
  fish: Number,
  farm: Number,
  wood: Number,
  gold: Number,
  stone: Number,
});

const BuildSchema = new Schema({
  name: { type: String, required: true },
  actions: [{
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    effect: { type: String, required: true },
  }],
});

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  builds: [BuildSchema],
});

module.exports.Building = db.model('buildings', BuildingSchema);
module.exports.Build = db.model('builds', BuildSchema);
module.exports.GatherRates = db.model('gatherRates', GatherRatesSchema);
module.exports.User = db.model('users', UserSchema);
