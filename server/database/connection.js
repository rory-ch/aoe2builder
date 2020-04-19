const mongoose = require('mongoose');

const { MONGO_HOST, MONGO_USER, MONGO_PASS, MONGO_DB } = process.env;
const uri = `mongod://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}`;

module.exports.db = mongoose.createConnection(uri, (err) => {
  if (err) {
    console.log(`Failed to connect to ${MONGO_HOST}/${MONGO_DB}`);
  } else {
    console.log(`Successfully connected to ${MONGO_HOST}/${MONGO_DB}`);
  }
});
