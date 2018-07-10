
const Right = require('./');

describe('Right', () => {
  it('Test Right', () => {
    const res = Right(5).fold(
      console.error,
      n => n * 2
    );
    expect(res).toBe(10);
  });

  if('Right shoud be null', () => {
    const res = Right('adsasd').fold(
      console.error,
      n => `Hello`
    );
    console.log(res);
    expect(res).toBe(null);
  });
});