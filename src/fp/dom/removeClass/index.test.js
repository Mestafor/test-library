'use strict';
const removeClass = require('./');

describe('removeClass', () => {
  const div = document.createElement('DIV');
  div.className = 'test';

  it('Should remove class from div', () => {
    expect(removeClass(div, 'test').classList.contains('test')).toBeFalsy();
  });

  it('Should return null', () => {
    expect(removeClass(null, null)).toBeNull();
  });

});