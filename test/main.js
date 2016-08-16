'use strict';

var path = require('path');

var expect = require('expect');

var replaceExt = require('../');

describe('replace-ext', function() {

  it('returns a valid replaced extension on long path', function(done) {
    var fname = path.join(__dirname, './fixtures/test.coffee');
    var expected = path.join(__dirname, './fixtures/test.js');
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('returns a valid replaced extension on basename', function(done) {
    var fname = 'test.coffee';
    var expected = 'test.js';
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('should not return a valid replaced extension on empty string', function(done) {
    var fname = '';
    var expected = '';
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });

  it('returns a valid removed extension on long path', function(done) {
    var fname = path.join(__dirname, './fixtures/test.coffee');
    var expected = path.join(__dirname, './fixtures/test');
    var result = replaceExt(fname, '');
    expect(result).toEqual(expected);
    done();
  });

  it('returns a valid added extension on long path', function(done) {
    var fname = path.join(__dirname, './fixtures/test');
    var expected = path.join(__dirname, './fixtures/test.js');
    var result = replaceExt(fname, '.js');
    expect(result).toEqual(expected);
    done();
  });
});
