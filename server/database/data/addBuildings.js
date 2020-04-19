const { Building } = require('../schema.js');

const TownCenter = new Building({
  name: 'town_center',
  cost: {
    wood: 275,
    stone: 100,
  },
  buildTime: 100,
  techs: [
    {
      name: 'feudal_age',
      cost: {
        food: 500,
      },
      researchTime: 130,
    },
    {
      name: 'loom',
      cost: {
        gold: 50,
      },
      researchTime: 25,
    },
    {
      name: 'castle_age',
      cost: {
        food: 800,
        gold: 200,
      },
      researchTime: 160,
    },
    {
      name: 'town_watch',
      cost: {
        food: 75,
      },
      researchTime: 25,
    },
  ],
  units: [
    {
      name: 'villager',
      cost: {
        food: 50,
      },
      buildTime: 25,
    },
  ],
});

TownCenter.save((err) => {
  if (err) console.error(`Failed to save Town Center:\n${err}`);
  else console.log('Successfuly saved Town Center to database');
});

const LumberCamp = new Building({
  name: 'lumber_camp',
  cost: {
    wood: 100,
  },
});

LumberCamp.save((err) => {
  if (err) console.error(`Failed to save Lumber Camp:\n${err}`);
  else console.log('Successfuly saved Lumber Camp to database');
});

const Mill = new Building({
  name: 'mill',
  cost: {
    wood: 100,
  },
});

Mill.save((err) => {
  if (err) console.error(`Failed to save Mill:\n${err}`);
  else console.log('Successfuly saved Mill to database');
});

const MiningCamp = new Building({
  name: 'mining_camp',
  cost: {
    wood: 100,
  },
});

MiningCamp.save((err) => {
  if (err) console.error(`Failed to save Mining Camp:\n${err}`);
  else console.log('Successfuly saved Mining Camp to database');
});

const House = new Building({
  name: 'house',
  cost: {
    wood: 100,
  },
});

House.save((err) => {
  if (err) console.error(`Failed to save House:\n${err}`);
  else console.log('Successfuly saved House to database');
});

// const BuildingSchema = new Schema({
//   name: { type: String, unique: true, required: true },
//   cost: CostSubDoc,
//   buildTime: { type: Number, required: true },
//   techs: [TechSubDoc],
//   units: [UnitSubDoc],
// });

// const CostSubDoc = new Schema({
//   wood: Number,
//   food: Number,
//   gold: Number,
//   Stone: Number,
// });

// const TechSubDoc = new Schema({
//   name: { type: String, unique: true, required: true },
//   cost: CostSubDoc,
//   researchTime: { type: Number, required: true },
// });

// const UnitSubDoc = new Schema({
//   name: { type: String, unique: true, required: true },
//   cost: CostSubDoc,
//   buildTime: { type: Number, required: true },
// });

