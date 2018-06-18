const swap = require('./');

describe('SWAP', () => {
  it('Should be define', () => {
    expect(swap).toBeDefined();
  });

  it('Should swap 2 arguments', () => {
    const test = (a, b) => [a, b];
    const swapedTest = swap(test);
    expect(swapedTest(1, 2)).toEqual([2, 1]);
  });;
});