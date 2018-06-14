const data = require('./data.json');
const lib = require('./');

describe('Test My Lib', () => {
  it('Should return valid data', () => {
    expect(lib.all).toBe(data);
  });
  it('Should return first element', () => {
    expect(lib.first).toBe(data[0]);
  });
  it('Should return last element', () => {
    expect(lib.last).toBe(data[data.length - 1]);
  });
});
