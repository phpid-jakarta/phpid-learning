const data = require("../data.js");

module.exports = {
  locals: {
    d: data,
    env: process.env.NODE_ENV,
  },
};
