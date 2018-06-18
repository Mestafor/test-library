const curry = require('./');

const test = (a, b, c) => a + b + c;

describe('CURRY', () => {

  it('Should curry function arguments', () => {
    const curryTest = curry(test);
    expect(curryTest(1)(1)(1)).toBe(3);
  });

});