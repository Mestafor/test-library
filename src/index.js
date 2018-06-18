// FP 
// FUNCTIONS
const compose = require('./fp/functions/compose');
const curry = require('./fp/functions/curry');
const is = require('./fp/functions/is');
const isArray = require('./fp/functions/isArray');
const isNumber = require('./fp/functions/isNumber');
const isString = require('./fp/functions/isString');
const partial = require('./fp/functions/partial');
const swap = require('./fp/functions/swap');
const trace = require('./fp/functions/trace');

// Object
const prop = require('./fp/object/prop');

// Monad
const Maybe = require('./fp/Monad/Maybe');
const Either = require('./fp/Monad/Either');
const Left = require('./fp/Monad/Left');
const Right = require('./fp/Monad/Right');
const tryCatch = require('./fp/Monad/tryCatch');

module.exports = {
  compose,
  curry,
  is,
  isArray,
  isNumber,
  isString,
  partial,
  swap,
  trace,

  prop,

  Maybe,
  Either,
  Left,
  Right,
  tryCatch
};