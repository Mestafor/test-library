'use strict';
const hasClass = require('./');

describe('hasClass', () => {
  const div = document.createElement('DIV');
  div.className = 'test';
  
  it('Should return null if if first parameter is undefined', () => {
    expect(hasClass(undefined, 'asdasf')).toBeNull()  
  });

  it('Should return null if if second parameter is not string', () => {
    expect(hasClass(div, div)).toBeNull()  
  });

});