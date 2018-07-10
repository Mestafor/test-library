const Maybe = require('./');

describe('test Maybe', () => {

  const errorBlock = 'Error block';
  const successBlock = 'Success block';

  it('Maybe shoud return error block', () => {
    const res = Maybe(null).fold(
      err => errorBlock,
      n => successBlock
    );
    expect(res).toBe(errorBlock);
  });

  it('Maybe shoud return success block', () => {
    const res = Maybe(true).fold(
      err => errorBlock,
      n => successBlock
    );
    expect(res).toBe(successBlock);
  });

  it('Maybe shoud return success block', () => {
    const res = Maybe(false).fold(
      err => errorBlock,
      n => successBlock
    );
    expect(res).toBe(successBlock);
  });
});