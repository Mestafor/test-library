'use strict';
const createElem = require('./');

describe('createElem', () => {

  it('Should return new html div element', () => {
    const res = createElem('DIV');
    expect(res.tagName).toBe('DIV');
  });

  it('Should return error', () => {
    const res = createElem(undefined);
    expect(res).toBeNull();
  });

});