const data = require('./data.json');

module.exports = {
  all: data,
  first: data[0],
  last: data[data.length -1]
};
