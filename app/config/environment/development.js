'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGOLAB_URI || 'mongodb://localhost/ziplineFcc2App-dev'
  },

  seedDB: true
};
