'use strict';
const addEvent = require('./');

describe('addEvent', () => {

  it('Should return null if fn is not a function', () => {
    const res = addEvent(null, 'event', 'test');
    expect(res).toBeNull();
  });

  it('Should return null if second parameter is not a string', () => {
    const res = addEvent(() => {}, 56, 'test');
    expect(res).toBeNull();
  });

  it('Should return null if third parameter is undefined or null', () => {
    const res = addEvent(() => {}, 56, undefined);
    expect(res).toBeNull();
  });

  it('Should return node element', () => {
    const el = document.createElement('DIV');
    const res = addEvent(() => {}, 'click', el);
    expect(res).toBe(el);
  });

});
