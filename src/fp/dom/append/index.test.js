'use strict';
const append = require('./');

describe('append', () => {

  it('Should return wrapper element', () => {
    const wrapper = document.createElement('DIV');
    const childEl = document.createElement('DIV');
    const res = append(wrapper, childEl);
    expect(res).toBe(wrapper);
  });

  it('Should return null if wrapper is undefined or null', () => {
    const res = append(null, null);
    expect(res).toBeNull();
  });

  it('Should return null if insertedEl is undefined or null', () => {
    const wrapper = document.createElement('DIV');
    const res = append(wrapper, null);
    expect(res).toBeNull();
  });
  
});