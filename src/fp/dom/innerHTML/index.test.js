'use strict';
const innerHTML = require('./');

describe('innerHTML', () => {
  const div = document.createElement('DIV');

  it('Should return null if el is undefined or null', () => {
    expect(innerHTML(null, 'inner text')).toBeNull();
  });

  it('Should return div', () => {
    expect(innerHTML(div, 'inner text')).toBe(div);
  });

  it('Should return div\'s content', () => {
    expect(innerHTML(div, 'inner text').innerHTML).toBe('inner text');
  });

});