const { GatherRates } = require('../schema.js');

// const GatherRatesSchema = new Schema({
//   hunt: Number,
//   berries: Number,
//   sheep: Number,
//   fish: Number,
//   farm: Number,
//   wood: Number,
//   gold: Number,
//   stone: Number,
// });

const newGatherRates = new GatherRates({
  // rates do not include travel time
  hunt: 0.41,
  berries: 0.31,
  sheep: 0.33,
  fish: 0.43,
  farm: 0.44,
  wood: 0.39,
  gold: 0.38,
  stone: 0.36,
});

newGatherRates.save((err, result) => {
  if (err) console.error(err);
  else console.error(`Successfully saved gather rates to the database:\n${result}`);
});
