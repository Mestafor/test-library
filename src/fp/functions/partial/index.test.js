const partial = require('./');

const test = (a, b) => a + b;
describe('PARTIAL', () => {
  it('Should use last argument latter', () => {
    const partialTest = partial(test, 1);
    expect(partialTest(2)).toBe(3);
  });

  it('Should use first argument latter', () => {
    const partialTest = partial(test, undefined, 3);
    expect(partialTest(7)).toBe(10);
  });
});