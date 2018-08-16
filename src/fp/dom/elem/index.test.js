'use strict';
const elem = require('./');

describe('elem', () => {

    const div = document.createElement('DIV');
    const span = document.createElement('SPAN');
    div.appendChild(span);

  it('Sould return null if first parameter is undefined or null', () => {
    expect(elem(undefined, 'span')).toBeNull()
    expect(elem(null, 'span')).toBeNull()
  });

  it('Sould return null if second parameter is not string', () => {
    expect(elem(div, span)).toBeNull();
  });

  it('Should return element', () => {
    expect(elem(div, 'span')).toBe(span);
  });

});