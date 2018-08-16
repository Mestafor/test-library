'use strict';
const addClass = require('./');

describe('addClass', () => {

  const node = document.createElement('DIV');

  it('Add class "test" to node', () => {
    const el = addClass(node, 'test');
    expect(el.className).toBe('test');
  });

  it('Node element is undefined or null should return null', () => {
    const el = addClass(null, 'test');
    expect(el).toBeNull();
  });

});