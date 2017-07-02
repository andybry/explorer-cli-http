const request = require('request');
const { omit } = require('lodash/fp');

module.exports = (data, cb) => request(omit(['runType'], data), cb);