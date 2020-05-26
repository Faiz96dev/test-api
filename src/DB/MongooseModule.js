const Promise = require('bluebird');
const mongoose = require('mongoose');
const logger = require('../services/LoggerService');
const { DB } = require('../environment/environment');

const mongooseOptions = {
  promiseLibrary: Promise,
  keepAlive: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
};
mongoose.Promise = Promise;
mongoose.connection.on('error', (err) => logger.error(`MongoDB connection error: ${err}`));
module.exports.mongooseOptions = mongooseOptions;
module.exports.mongoose = mongoose;
module.exports.connect = () => {
  logger.info(`connecting to mongoDB at ${DB.link}`);
  return mongoose.connect(DB.link, mongooseOptions)
    .then(() => {
      logger.info('MongoDB connected successfully');
      return Promise.resolve();
    });
};