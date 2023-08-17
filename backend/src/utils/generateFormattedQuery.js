const snakeize = require('snakeize');

const getFormattedUpdateColumns = (object) => Object.keys(snakeize(object))
  .map((key) => `${key} = ?`)
  .join(', ');

module.exports = { getFormattedUpdateColumns };