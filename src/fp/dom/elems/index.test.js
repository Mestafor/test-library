'use strict';
const elems = require('./');

describe('elems', () => {

  const div = document.createElement('DIV');
  for (let i = 0; i < 5; i++) {
    const span = document.createElement('SPAN');
    span.className = `span-${i}`;
    div.appendChild(span);
  }

  it('Sould return null if first parameter is undefined or null', () => {
    expect(elems(undefined, 'span')).toBeNull();
    expect(elems(null, 'span')).toBeNull();
  });

  it('Sould return null if second parameter is not string', () => {
    expect(elems(div, 56)).toBeNull();
  });

  it('Should return element', () => {
    expect(elems(div, '.span-2')[0].className).toBe('span-2');
  });

});